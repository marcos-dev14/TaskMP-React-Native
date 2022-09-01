import { Button as ButtonBase, IButtonProps, Text, Flex } from 'native-base';

interface ButtonProps extends IButtonProps {
  title: string;
  type: 'primary' | 'secondary';
}

export function Button({ title, type, ...rest }: ButtonProps) {
  return (
    <Flex>
      { type === 'primary' ? (
          <ButtonBase 
            height={50} 
            bg="primary.700"
            px={10}
            _pressed={{
              bg: "primary.500",
            }}
            delayLongPress={0.7}
            {...rest}
          >
            <Text
              fontFamily="body"
              fontSize={14}
              fontWeight="bold"
              color="white"
            >
              {title}
            </Text>
          </ButtonBase>
        ) : (
          <ButtonBase 
            height={50} 
            bg="white"
            px={10}
            _pressed={{
              bg: "gray.300"
            }}
            {...rest}
          >
            <Text
              fontFamily="body"
              fontSize={14}
              fontWeight="bold"
              color="black"
            >
              {title}
            </Text>
          </ButtonBase>
        )
      }
    </Flex>
  );
}