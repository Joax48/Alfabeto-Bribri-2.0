import {
  Box,
  Container,
  VStack,
  Heading,
  Text,
  Divider,
  Card,
  CardBody,
  Stack,
} from "@chakra-ui/react";

function Credits() {
  return (
    <Box
      bg="white"
      userSelect="none"
      py={{ base: 10, md: 16 }}
      px={{ base: 4, md: 6 }}
    >
      <Container maxW="4xl">
        <VStack spacing={4} textAlign="center" mb={2}>
          <Heading size="xl" color="black">
            Créditos
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

              {/* Desarrollo */}
              <Box>
                <Heading size="sm" color="black" mb={1}>
                  Desarrollo del sitio web
                </Heading>
                <Text color="gray.700">
                  Paula Camacho González, Andrés Víquez Marchena y Jorge Quirós Anderson
                </Text>
              </Box>

              {/* Diseño */}
              <Box>
                <Heading size="sm" color="black" mb={1}>
                  Diseño gráfico del sitio web
                </Heading>
                <Text color="gray.700">
                  Laura Jiménez Cubillo
                </Text>
              </Box>

              {/* Ilustraciones */}
              <Box>
                <Heading size="sm" color="black" mb={1}>
                  Ilustraciones
                </Heading>

                <Text color="gray.700" mb={2} fontWeight="semibold">
                  Ilustraciones creadas para el sitio web
                </Text>
                <Text color="gray.700" mb={3}>
                  Denisse Cruz Henríquez
                </Text>

                <Text color="gray.700" mb={3} fontWeight="semibold">
                  Ilustraciones de la parte del alfabeto ilustrado
                </Text>

                <Text color="gray.700" mb={3}>
                  Las ilustraciones utilizadas para ejemplificar las palabras en la sección{" "}
                  <Text as="span" fontStyle="italic">
                    “Beˈ ẽˈ yawö́ ké̠we. Estudie primero”
                  </Text>{" "}
                  son tomadas de otros materiales creados en el marco de este proyecto.
                </Text>

                <Text color="gray.700" mb={2}>
                  <Text as="span" fontWeight="semibold">
                    a) Del cuerpo humano:
                  </Text>{" "}
                  Ana Carolina Fernández Barboza (tomadas de{" "}
                  <Text as="span" fontStyle="italic">
                    Seˈ apà. Diccionario pictográfico del cuerpo humano en bribri
                  </Text>
                  ).{" "}
                  <Text as="span" fontWeight="semibold">
                    Modificación de ilustraciones:
                  </Text>{" "}
                  Carina Elizondo Valverde y Laura Jiménez Cubillo.
                </Text>

                <Text color="gray.700" mb={2}>
                  <Text as="span" fontWeight="semibold">
                    b) De la casa tradicional y objetos comunes en esta:
                  </Text>{" "}
                  Diego Zúñiga Espinoza (tomadas de{" "}
                  <Text as="span" fontStyle="italic">
                    Ù. Diccionario pictográfico de la casa tradicional bribri
                  </Text>
                  ).
                </Text>

                <Text color="gray.700" mb={2}>
                  <Text as="span" fontWeight="semibold">
                    c) De animales:
                  </Text>{" "}
                  Pamela Zamora Miranda, Marian Cerdas Chavarría, Francella Artavia Hernández, Ana Carolina Fernández Barboza, Eduardo Vargas Montero, Kevin Mora Molina (tomadas de{" "}
                  <Text as="span" fontStyle="italic">
                    Íyiwak. Diccionario pictográfico de los animales en bribri
                  </Text>
                  ).
                </Text>

                <Text color="gray.700" mb={2}>
                  <Text as="span" fontWeight="semibold">
                    d) De alimentos:
                  </Text>{" "}
                  Fabiola Cordero Cantillo, Nathalia Valerín Vargas, Fabián Bolaños Villegas, Francini Gómez Calderón (tomadas de{" "}
                  <Text as="span" fontStyle="italic">
                    Seˈ má. Diccionario-Recetario de la alimentación tradicional bribri
                  </Text>
                  ).
                </Text>

                <Text color="gray.700">
                  <Text as="span" fontWeight="semibold">
                    e) Otras:
                  </Text>{" "}
                  Daniela Rodríguez Minsky, Nathalia Valerín Vargas, Mariela Ugarte Rojas (tomadas de{" "}
                  <Text as="span" fontStyle="italic">
                    Seˈ dalì. Diccionario y enciclopedia de la agricultura tradicional bribri
                  </Text>
                  ); Silvia Mora Valverde (tomadas de{" "}
                  <Text as="span" fontStyle="italic">
                    Tté shtáwo̠k. Los números en lengua bribri
                  </Text>
                  ); Carina Elizondo Valverde y V. Hutchison Martínez (tomadas de{" "}
                  <Text as="span" fontStyle="italic">
                    Íyi wö̀a. Colores en lengua bribri
                  </Text>
                  ); Carina Elizondo Valverde (ilustración de la ‘sembrar’).
                </Text>
              </Box>

              {/* Asesoría */}
              <Box>
                <Heading size="sm" color="black" mb={1}>
                  Asesoría lingüístico-cultural
                </Heading>
                <Text color="gray.700">
                  Alí García Segura
                </Text>
              </Box>

              {/* Coordinación */}
              <Box>
                <Heading size="sm" color="black" mb={1}>
                  Diseño didáctico, revisión lingüística y coordinación del proceso
                </Heading>
                <Text color="gray.700">
                  Luis Serrato Pineda
                </Text>
              </Box>

              {/* Año */}
              <Box textAlign="center" pt={4}>
                <Text color="gray.500">2026</Text>
              </Box>

            </Stack>
          </CardBody>
        </Card>
      </Container>
    </Box>
  );
}

export default Credits;