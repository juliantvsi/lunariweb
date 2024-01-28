import { IntoSectionsContainer, Text, Card } from "../styles/IntoSections"
import { Icon } from "../components";
import { StyledBar } from "../styles/shared-styles";

export default function (){

  return(

    <IntoSectionsContainer>
      <Card>
        <Icon name={'truck'} size={'4rem'} cursor={'default'} />
        <Text>Worldwide shipping</Text>
      </Card>
      <Card>
        <Icon name={'box2-heart'} size={'4rem'} cursor={'default'} />
        <Text>On-time deliveries</Text>
      </Card>
      <Card>
        <Icon name={'wallet2'} size={'4rem'} cursor={'default'} />
        <Text>All payment methods</Text>
      </Card>
    </IntoSectionsContainer>

  )
}

