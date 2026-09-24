import React from 'react';

const SkeletonWrapper = ({ 
  loading = false, 
  fallback = null, 
  children 
}) => {
  if (loading) {
    return fallback;
  }
  
  return <>{children}</>;
};

export default SkeletonWrapper;
