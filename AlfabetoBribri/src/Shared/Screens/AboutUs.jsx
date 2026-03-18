import {
  Box,
  Container,
  VStack,
  Heading,
  Text,
  Divider,
  Stack,
  Link,
  Card,
  CardBody,
} from "@chakra-ui/react";

function AboutUs() {
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
            Acerca del TC-625
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

              {/* Descripción */}
              <Box>
                <Text color="gray.700" lineHeight="1.7">
                  El proyecto de trabajo comunal universitario{" "}
                  <Text as="span" fontWeight="semibold">
                    TC-625 “Lenguas y tradiciones orales de Costa Rica”
                  </Text>
                  , adscrito a la{" "}
                  <Text as="span" fontWeight="semibold">
                    Escuela de Filología, Lingüística y Literatura
                  </Text>{" "}
                  y a la{" "}
                  <Text as="span" fontWeight="semibold">
                    Vicerrectoría de Acción Social de la Universidad de Costa Rica
                  </Text>
                  , colabora con diversas comunidades etnolingüísticas de Costa Rica con el objetivo de{" "}
                  <Text as="span" fontWeight="semibold">
                    fortalecer la presencia de sus lenguas y culturas autóctonas
                  </Text>{" "}
                  mediante iniciativas de fortalecimiento, promoción, documentación, visibilización, revalorización, enseñanza y revitalización ideadas, elaboradas e implementadas en consulta con miembros de los respectivos pueblos. El proyecto promueve la{" "}
                  <Text as="span" fontWeight="semibold">
                    participación activa de adultos, jóvenes y niños
                  </Text>{" "}
                  de las comunidades con la que trabajamos.
                </Text>
              </Box>

              <Box>
                <Text color="gray.700" lineHeight="1.7">
                  Uno de los propósitos más importantes del proyecto es la{" "}
                  <Text as="span" fontWeight="semibold">
                    creación de recursos didácticos y de consulta
                  </Text>{" "}
                  adecuados para la población y elaborados con criterios técnicos de{" "}
                  <Text as="span" fontWeight="semibold">
                    diseño gráfico, lingüística aplicada
                  </Text>{" "}
                  (didáctica de la lengua y revitalización lingüística) y uso de nuevas tecnologías. El presente sitio web constituye una muestra de esta forma de proceder. Esperamos que sea de utilidad para los{" "}
                  <Text as="span" fontWeight="semibold">
                    miembros del pueblo bribri
                  </Text>
                  , así como para todas las personas interesadas en la lengua y la cultura de este grupo.
                </Text>
              </Box>

              {/* Firma */}
              <Box pt={4}>
                <Heading size="sm" color="black" mb={1}>
                  Luis Serrato Pineda
                </Heading>
                <Text color="gray.700">
                  Coordinador del proyecto
                </Text>
                <Text color="gray.700">
                  Universidad de Costa Rica
                </Text>
                <Text color="gray.700">
                  Contacto:{" "}
                  <Link
                    href="mailto:dipalicori@ucr.ac.cr"
                    color="#00C0F3"
                    _hover={{ textDecoration: "underline", color: "#0099CC" }}
                  >
                    dipalicori@ucr.ac.cr
                  </Link>
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

export default AboutUs;