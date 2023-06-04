import { PropsWithChildren, Suspense } from 'react';
import { Portal, Progress } from '@chakra-ui/react';

export const PageLoader = ({ children }: PropsWithChildren) => {
  return (
    <Suspense
      fallback={
        <Portal>
          <Progress
            size="xs"
            position="fixed"
            colorScheme="green"
            top={0}
            right={0}
            left={0}
            isIndeterminate
          />
        </Portal>
      }
    >
      {children}
    </Suspense>
  );
};
