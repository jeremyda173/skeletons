/**
 * Constantes para configuraciones de skeleton
 */

export const ANIMATION_TYPES = {
  SHIMMER: 'shimmer',
  PULSE: 'pulse',
};

export const SKELETON_SHAPES = {
  CIRCLE: 'circle',
  SQUARE: 'square',
};

export const CARD_VARIANTS = {
  DEFAULT: 'default',
  WITH_IMAGE: 'with-image',
  WITH_AVATAR: 'with-avatar',
  WITH_FOOTER: 'with-footer',
};

export const LIST_VARIANTS = {
  DEFAULT: 'default',
  WITH_AVATAR: 'with-avatar',
  SIMPLE: 'simple',
};

export const PROFILE_VARIANTS = {
  DEFAULT: 'default',
  DETAILED: 'detailed',
};

export const DEFAULT_SKELETON_CONFIG = {
  animation: ANIMATION_TYPES.SHIMMER,
  duration: '1.5s',
  radius: '4px',
  lineHeight: '16px',
  gap: '10px',
};

export default {
  ANIMATION_TYPES,
  SKELETON_SHAPES,
  CARD_VARIANTS,
  LIST_VARIANTS,
  PROFILE_VARIANTS,
  DEFAULT_SKELETON_CONFIG,
};

