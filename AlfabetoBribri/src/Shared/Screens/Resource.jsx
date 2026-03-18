import {
  Box,
  Container,
  VStack,
  Heading,
  Text,
  Divider,
  Stack,
  Card,
  CardBody,
} from "@chakra-ui/react";

function Resource() {
  return (
    <Box
      bg="white"
      userSelect="none"
      py={{ base: 10, md: 16 }}
      px={{ base: 4, md: 6 }}
    >
      <Container maxW="4xl">
        {/* Encabezado */}
        <VStack spacing={4} textAlign="center" mb={2}>
          <Heading size="xl" color="black">
            Sobre este recurso
          </Heading>
        </VStack>

        <Divider my={8} />

        <Card
          variant="outline"
          borderColor="gray.200"
          borderRadius="2xl"
          boxShadow="sm"
          _hover={{ boxShadow: "md" }}
        >
          <CardBody p={{ base: 6, md: 8 }}>
            <Stack spacing={6}>

              {/* Intro */}
              <Box>
                <Text color="gray.700" lineHeight="1.7">
                  El sitio web{" "}
                  <Text as="span" fontWeight="semibold">
                    “Seˈ (uj)tö̀ shtók. Alfabeto bribri”
                  </Text>{" "}
                  forma parte de los recursos pensados especialmente para los{" "}
                  <Text as="span" fontWeight="semibold">
                    miembros del pueblo bribri
                  </Text>
                  . Consta de dos partes: una para{" "}
                  <Text as="span" fontWeight="semibold">
                    aprender/estudiar
                  </Text>{" "}
                  y otra para{" "}
                  <Text as="span" fontWeight="semibold">
                    practicar
                  </Text>
                  .
                </Text>
              </Box>

              {/* Parte 1 */}
              <Box>
                <Text color="gray.700" lineHeight="1.7">
                  La primera parte,{" "}
                  <Text as="span" fontWeight="semibold">
                    “Beˈ ẽˈ yawö́ ké̠we. Estudie primero”
                  </Text>
                  , es básicamente un{" "}
                  <Text as="span" fontWeight="semibold">
                    alfabeto ilustrado
                  </Text>
                  , es decir, una presentación didáctica de cada uno de los símbolos que se utilizan para escribir la lengua bribri, por medio de la combinación de símbolo, palabra ejemplo e ilustración.
                </Text>
              </Box>

              <Box>
                <Text color="gray.700" lineHeight="1.7">
                  Esta propuesta actualiza la tradición iniciada con el libro{" "}
                  <Text as="span" fontStyle="italic">
                    “Abecedario ilustrado bribri”
                  </Text>{" "}
                  de Adolfo Constenla Umaña (1992), y continuada por la aplicación móvil{" "}
                  <Text as="span" fontStyle="italic">
                    “Bribri. Ìs seˈ ttö̀ ulàr. Alfabeto bribri”
                  </Text>
                  , desarrollada en el marco de este proyecto bajo la coordinación de Carlos Sánchez Avendaño.
                </Text>
              </Box>

              <Box>
                <Text color="gray.700" lineHeight="1.7">
                  En esta versión web, cada símbolo se ejemplifica con{" "}
                  <Text as="span" fontWeight="semibold">
                    tres palabras ilustradas
                  </Text>
                  , cada una acompañada de{" "}
                  <Text as="span" fontWeight="semibold">
                    audio
                  </Text>{" "}
                  y{" "}
                  <Text as="span" fontWeight="semibold">
                    traducción al español
                  </Text>
                  . El sistema de escritura utilizado corresponde al del libro de 1992, ya que es el más empleado por las personas bribris en la actualidad.
                </Text>
              </Box>

              {/* Parte 2 */}
              <Box>
                <Text color="gray.700" lineHeight="1.7">
                  La segunda parte,{" "}
                  <Text as="span" fontWeight="semibold">
                    “I ma̠ú̠ í̠e̠. Practique aquí”
                  </Text>
                  , aprovecha los contenidos de la primera sección para generar{" "}
                  <Text as="span" fontWeight="semibold">
                    pruebas cortas interactivas
                  </Text>{" "}
                  que permiten a las personas{" "}
                  <Text as="span" fontWeight="semibold">
                    autoevaluar su conocimiento
                  </Text>
                  .
                </Text>
              </Box>

              <Box>
                <Text color="gray.700" lineHeight="1.7">
                  Siguiendo la lógica de elegir la opción correcta entre varias posibilidades, se proponen tres tipos de ejercicios:
                </Text>
              </Box>

              <Box pl={4}>
                <Text color="gray.700">1) Asociar ilustración con la palabra escrita</Text>
                <Text color="gray.700">2) Asociar audio con la palabra escrita</Text>
                <Text color="gray.700">3) Combinar ilustración y audio con la palabra escrita</Text>
              </Box>

              <Box>
                <Text color="gray.700" lineHeight="1.7">
                  La parte práctica busca favorecer la consulta de la sección de estudio, permitiendo que cada persona refuerce su aprendizaje al identificar palabras desconocidas y volver a estudiarlas antes de evaluarse nuevamente.
                </Text>
              </Box>

            </Stack>
          </CardBody>
        </Card>
      </Container>
    </Box>
  );
}

export default Resource;