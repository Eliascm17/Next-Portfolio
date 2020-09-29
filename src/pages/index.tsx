import { Heading, Image } from "@chakra-ui/core";
import { Wrapper } from "../components/Wrapper";
import { Avatar, AvatarBadge } from "@chakra-ui/core";

const Index = () => {
  return (
    <Wrapper>
      <Heading>Welcome to My web site!</Heading>
      <Image src="https://github.com/Eliascm17/Next-Portfolio/blob/master/src/assets/Me.JPEG" alt="Elias Moreno" />
    </Wrapper>
  );
};

export default Index;
