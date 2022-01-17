/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Alert, Type, Checkbox, Stack, Button } from '@uswitch/spark'
import { Container, PoundCircleIcon, RightArrowIcon } from './components'

console.log({
  Alert,
  Type,
  Checkbox,
  Stack,
  Button,
  Container,
  PoundCircleIcon,
  RightArrowIcon,
})

export default () => (
  <Container
    sx={{ pt: 'xxl', pb: 'md', maxWidth: 500, mx: 'auto', bg: 'white' }}
  >
    <Type.H5 as="h1">Welcome to Spark!</Type.H5>
    <Type.S2 sx={{ color: 'grey-60' }}>
      Save money on switching your bills
    </Type.S2>

    <Stack align="stretch" spacing="xxs" sx={{ my: 'xxl' }}>
      <Checkbox checked readOnly>
        Energy
      </Checkbox>
      <Checkbox>Broadband</Checkbox>
      <Checkbox>Mobile Phones</Checkbox>
      <Checkbox>Car Insurance</Checkbox>
      <Checkbox>Credit Card</Checkbox>
    </Stack>

    <Alert
      variant="success"
      icon={<PoundCircleIcon size={24} />}
      title="£387*"
      sx={{ mb: 'xxs' }}
    >
      Estimated savings
    </Alert>

    <Button
      variant="primary"
      rightIcon={<RightArrowIcon />}
      sx={{ mb: 'lg' }}
      fullWidth
    >
      Next
    </Button>
  </Container>
)
