import news2602 from './202602.json' with { type: 'json' }

export type { BilingualText, BilingualNotes, Project, DailyNewsItem, ProcessedDailyNewsItem, QAItem } from './types';
import { getWeekday, type DailyNewsItem, type ProcessedDailyNewsItem } from './types';

// Category to avatar mapping (deterministic)
export const categoryAvatars: Record<string, string> = {
  '论文': '📄',
  '新闻': '📰',
  '开源': '💻',
  '视频': '🎥',
  '博客': '📝',
  '活动': '🎪',
  '工具': '🛠️',
  '应用': '📱',
  '信息': '📃',
  '漏洞': '🪳',
  '教程': '📝',
};

// Default avatar for unknown categories
export const defaultAvatar = '📄';

export const newsData: ProcessedDailyNewsItem[] = [
  ...news2602,
].map((item: DailyNewsItem): ProcessedDailyNewsItem => {
  const [year, month, day] = item.date.split('-');
  return {
    ...item,
    year,
    month,
    day,
    weekday: getWeekday(item.date),
    weekdayNumber: new Date(item.date).getDay(),
  };
});

export function getNewsByMonth(): Map<string, ProcessedDailyNewsItem[]> {
  const byMonth = new Map<string, ProcessedDailyNewsItem[]>();

  for (const note of newsData) {
    const month = note.year + "-" + note.month;
    const existing = byMonth.get(month) || [];
    existing.push(note);
    byMonth.set(month, existing);
  }

  return byMonth;
}