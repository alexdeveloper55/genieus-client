//@ts-ignore
import React, { useState } from 'react'
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  Heading,
  Avatar,
  Box,
  Center,
  Stack,
  Link,
  Badge,
  useColorModeValue,
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

//@ts-ignore

const ModalDecline = ({ isOpen, onClose, name, imageUrl }) => {
  const navigate = useNavigate()

  // TODO: ISTUTOR FLAG (true/false) DECIDES WHERE TO NAVIGATE TO ON BUTTON CLICK
  // TODO: CHANGE TO PROPS AND PASS IN FROM PREVIOUS COMPONENT
  const [isTutor, setIsTutor] = useState(false)

  const onAbandonClick = () => {
    if (isTutor) {
      return navigate('/tutor-dashboard')
    } else {
      return navigate('/student-hr')
    }
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay>
        <ModalContent fontFamily="sans-serif">
          <Center py={6}>
            <Box
              maxW={'320px'}
              w={'full'}
              bg={useColorModeValue('white', 'gray.900')}
              boxShadow={'2xl'}
              rounded={'lg'}
              p={6}
              textAlign={'center'}
            >
              <ModalHeader>
                <Text
                  textAlign={'center'}
                  color={useColorModeValue('gray.700', 'gray.400')}
                  px={3}
                >
                  Confirm you wish to decline this Help Request with {name}
                </Text>
              </ModalHeader>

              <ModalBody>
                <Avatar size={'2xl'} src={imageUrl} alt={'Avatar Alt'} />
                <Text mt="1rem">
                  {isTutor
                    ? 'Clicking Abandon will return you to your Dashboard'
                    : 'Clicking Abandon will return you to your Help Request'}
                </Text>
              </ModalBody>
              <ModalFooter>
                <Stack
                  align={'center'}
                  justify={'center'}
                  direction={'row'}
                  mt={1}
                >
                  <Stack direction={'row'} spacing={4}>
                    <Button
                      flex={1}
                      padding="1rem"
                      fontSize={'sm'}
                      rounded={'full'}
                      _focus={{
                        bg: 'gray.200',
                      }}
                      // TODO: CONDITIONAL: RETURN TO
                      onClick={onAbandonClick}
                    >
                      {/* TODO: CONDITIONAL TEXT TUTOR/STUDENT
                      STUDENT: [YES] RETURN TO HELP REQUEST
                    TUTOR: [YES] RETURN TO TUTOR DASHBOARD */}
                      Abandon
                    </Button>
                    <Button
                      flex={1}
                      padding="1rem"
                      fontSize={'sm'}
                      rounded={'full'}
                      bg={'blue.400'}
                      color={'white'}
                      boxShadow={
                        '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                      }
                      _hover={{
                        bg: 'blue.500',
                      }}
                      _focus={{
                        bg: 'blue.500',
                      }}
                      onClick={onClose}
                    >
                      Resume Chat
                    </Button>
                  </Stack>
                </Stack>
              </ModalFooter>
            </Box>
          </Center>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  )
}

export default ModalDecline
