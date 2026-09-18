'use client';

import { useCallback, useEffect, useState } from 'react';
import type { Translate } from '@/lib/i18n';
import type { InspectionOperatorItem } from '@/models/inspections/schema';
import { inspectionClient } from './client';
import { errorMessage } from './error';

const pageSize = 1;

type Feedback = { success: (message: string) => void; error: (message: string) => void };

export function useOperator(t: Translate, feedback: Feedback) {
  const [items, setItems] = useState<InspectionOperatorItem[] | null>(null);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [creating, setCreating] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [latestLink, setLatestLink] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const totalPages = Math.max(1, Math.ceil((items?.length ?? 0) / pageSize));
  const visiblePage = Math.min(currentPage, totalPages);
  const visibleItems = items?.slice((visiblePage - 1) * pageSize, visiblePage * pageSize) ?? [];

  const load = useCallback(async (refresh = false) => {
    if (refresh) setRefreshing(true);
    setLoadError(null);
    try {
      setItems((await inspectionClient.listOperator()).items);
    } catch (error) {
      setLoadError(errorMessage(error, 'Could not load local inspections.'));
    } finally {
      if (refresh) setRefreshing(false);
    }
  }, []);

  useEffect(() => void load(), [load]);
  useEffect(() => {
    if (currentPage > totalPages) setCurrentPage(totalPages);
  }, [currentPage, totalPages]);

  async function create(roomLabel: string) {
    setCreating(true);
    try {
      const created = await inspectionClient.createOperator({ roomLabel });
      setItems((current) => (current ? [created, ...current] : [created]));
      setCurrentPage(1);
      setLatestLink(created.shareUrl);
      feedback.success(t('operator.createSuccess', { room: created.roomLabel }));
    } catch (error) {
      feedback.error(errorMessage(error, t('operator.createError')));
    } finally {
      setCreating(false);
    }
  }

  async function copy(link: string) {
    try {
      await navigator.clipboard.writeText(link);
      feedback.success(t('operator.copySuccess'));
    } catch {
      feedback.error(t('operator.copyError'));
    }
  }

  async function remove(item: InspectionOperatorItem) {
    if (!window.confirm(t('operator.deleteConfirm'))) return;
    setDeletingId(item.id);
    try {
      await inspectionClient.deleteOperator(item.id);
      setItems((current) => current?.filter(({ id }) => id !== item.id) ?? []);
      if (latestLink === item.shareUrl) setLatestLink(null);
      feedback.success(t('operator.deleteSuccess'));
    } catch (error) {
      feedback.error(errorMessage(error, t('operator.deleteError')));
    } finally {
      setDeletingId(null);
    }
  }

  return {
    items,
    visibleItems,
    loadError,
    creating,
    refreshing,
    latestLink,
    deletingId,
    visiblePage,
    totalPages,
    create,
    copy,
    remove,
    refresh: () => load(true),
    retry: () => load(),
    previous: () => setCurrentPage((page) => Math.max(1, page - 1)),
    next: () => setCurrentPage((page) => Math.min(totalPages, page + 1)),
  };
}
