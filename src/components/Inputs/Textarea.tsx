import { TextArea, ITextAreaProps } from 'native-base';

interface InputProps extends ITextAreaProps {
  placeholder: string;
}

export function Textarea({ placeholder, ...rest}: InputProps) {
  return (
    <TextArea 
      width="100%"
      h={100}
      fontSize="md"
      fontFamily="body"
      color="textSecondary"
      placeholderTextColor="textPlaceholder"
      placeholder={placeholder}
      bg="white"
      borderWidth={0}
      _focus={{
        borderWidth: 0,
        bg: "white"
      }}
    />
  );
}