/* eslint-disable react/jsx-props-no-spreading */
import { Flex, FlexProps, Icon } from '@chakra-ui/react';
import { IconType } from 'react-icons';
import { Link } from 'react-router-dom';
import { AppRoutes } from '@/shared/enums/router';

interface NavItemProps extends FlexProps {
  icon: IconType;
  link: AppRoutes;
  text: string;
}

export const NavItem = ({ icon, link, text, ...rest }: NavItemProps) => {
  return (
    <Link to={link} style={{ textDecoration: 'none' }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'green.600',
          color: 'white',
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {text}
      </Flex>
    </Link>
  );
};
