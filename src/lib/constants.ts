export const COLORS = {
  primary: '#4F46E5',
  background: '#F7F6F3',
  success: '#16A34A',
  danger: '#DC2626',
  warning: '#D97706',
} as const

export const CATEGORIES = [
  'Food',
  'Rent',
  'Transport',
  'Utilities',
  'Entertainment',
  'Shopping',
  'Health',
  'Education',
  'Personal Care',
  'Other',
] as const

export const CATEGORY_COLORS: Record<string, string> = {
  Food:           'bg-orange-100 text-orange-800',
  Rent:           'bg-blue-100 text-blue-800',
  Transport:      'bg-purple-100 text-purple-800',
  Utilities:      'bg-yellow-100 text-yellow-800',
  Entertainment:  'bg-pink-100 text-pink-800',
  Shopping:       'bg-indigo-100 text-indigo-800',
  Health:         'bg-green-100 text-green-800',
  Education:      'bg-cyan-100 text-cyan-800',
  'Personal Care':'bg-rose-100 text-rose-800',
  Other:          'bg-gray-100 text-gray-800',
}

export const EXPENSE_TYPES = ['NEED', 'WANT'] as const