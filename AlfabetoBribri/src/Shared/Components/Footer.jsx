import {
  Box,
  Flex,
  Text,
  Image,
  VStack,
  HStack,
  Heading,
  Link,
  Icon,
  Divider,
  SimpleGrid,
} from "@chakra-ui/react";
import {
  FiMail,
  FiMapPin,
  FiUsers,
  FiCode,
  FiLayout,
  FiGlobe,
} from "react-icons/fi";
import LogoUCR from "../../Assets/LogoUCR.png";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box as="footer" bg="#323232" color="white" userSelect="none">
      {/* CONTENIDO PRINCIPAL */}
      <Box py={4}>
        <Box maxW="1200px" mx="auto" px={6}>
          <SimpleGrid
            columns={{ base: 1, md: 4 }}
            spacing={6}
            alignItems="flex-start"
          >
            {/* COLUMNA 1: LOGO */}
            <VStack align="flex-start" spacing={3}>
              <Image
                src={LogoUCR}
                alt="Universidad de Costa Rica"
                maxW="150px"
                mt={12} 
                w="auto"
                height="auto"
              />
            </VStack>

            {/* COLUMNA 2: DESCRIPCIÓN */}
            <VStack align="flex-start" spacing={3}>
              <HStack spacing={2}>
                <Icon as={FiGlobe} color="teal.300" />
                <Text fontSize="md" fontWeight="semibold">
                  Alfabeto bribri
                </Text>
              </HStack>

              <Text fontSize="xs" color="gray.300" lineHeight="1.4">
                Plataforma educativa desarrollada por el TC-625 Lenguas y
                tradiciones orales de Costa Rica, dedicada a preservar y
                promover el idioma bribri.
              </Text>
            </VStack>

            {/* COLUMNA 3: EQUIPO */}
            <VStack align="flex-start" spacing={3}>
              <HStack spacing={2}>
                <Icon as={FiUsers} color="teal.300" />
                <Heading as="h3" size="sm">
                  Nuestro equipo
                </Heading>
              </HStack>

              <Box>
                <HStack spacing={2} mb={2}>
                  <Icon as={FiCode} color="orange.300" boxSize={4} />
                  <Text fontSize="sm" fontWeight="semibold">
                    Desarrollo
                  </Text>
                </HStack>
                <VStack align="flex-start" spacing={1} pl={5}>
                  {[
                    "Andrés Sebastián Víquez Marchena",
                    "Paula Melissa Camacho González",
                    "Jorge José Quirós Anderson",
                  ].map((name, index) => (
                    <Text key={index} fontSize="xs" color="gray.300">
                      {name}
                    </Text>
                  ))}
                </VStack>
              </Box>

              <Box>
                <HStack spacing={2} mb={2}>
                  <Icon as={FiLayout} color="pink.300" boxSize={4} />
                  <Text fontSize="sm" fontWeight="semibold">
                    Diseño gráfico
                  </Text>
                </HStack>
                <Text fontSize="xs" color="gray.300" pl={5}>
                  Laura Jesús Jiménez Cubillo
                </Text>
              </Box>
            </VStack>

            {/* COLUMNA 4: CONTACTO */}
            <VStack align="flex-start" spacing={3}>
              <HStack spacing={2}>
                <Icon as={FiMail} color="teal.300" />
                <Heading as="h3" size="sm">
                  Contacto
                </Heading>
              </HStack>

              <HStack spacing={3}>
                <Icon as={FiMail} color="gray.400" boxSize={4} />
                <Link
                  href="mailto:tc625.efll@ucr.ac.cr"
                  fontSize="xs"
                  color="teal.300"
                  _hover={{ textDecoration: "underline" }}
                >
                  tc625.efll@ucr.ac.cr
                </Link>
              </HStack>

              <HStack spacing={3} align="flex-start">
                <Icon as={FiMapPin} color="gray.400" boxSize={4} mt={0.5} />
                <VStack align="flex-start" spacing={0}>
                  <Text fontSize="xs" color="gray.300">
                    Universidad de Costa Rica
                  </Text>
                  <Text fontSize="xs" color="gray.400">
                    San José, Costa Rica
                  </Text>
                </VStack>
              </HStack>
            </VStack>
          </SimpleGrid>
        </Box>
      </Box>

      <Divider borderColor="gray.600" />

      {/* FOOTER INFERIOR */}
      <Box py={2}>
        <Box maxW="1200px" mx="auto" px={6}>
          <Flex justify="center">
            <Text fontSize="xs" color="gray.500">
              &copy; {currentYear} Alfabeto bribri.
            </Text>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
