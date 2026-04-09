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
  Image,
  HStack,
} from "@chakra-ui/react";
import LogoUCR from "../../Assets/FirmaUCR2.png";
import LogoVAS from "../../Assets/LogoVAS.png";
import LogoEFLL from "../../Assets/LogoEFLL.png";

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
                  El proyecto de trabajo comunal universitario TC-625 &ldquo;Lenguas y tradiciones orales de Costa Rica&rdquo;,
                  adscrito a la Escuela de Filolog&iacute;a, Ling&uuml;&iacute;stica y Literatura y a la
                  Vicerrector&iacute;a de Acci&oacute;n Social de la Universidad de Costa Rica,
                  colabora con diversas comunidades etnoling&uuml;&iacute;sticas de Costa Rica con el objetivo de
                  fortalecer la presencia de sus lenguas y culturas aut&oacute;ctonas mediante iniciativas de
                  fortalecimiento, promoci&oacute;n, documentaci&oacute;n, visibilizaci&oacute;n, revalorizaci&oacute;n,
                  ense&ntilde;anza y revitalizaci&oacute;n ideadas, elaboradas e implementadas en consulta con miembros
                  de los respectivos pueblos. El proyecto promueve la participaci&oacute;n activa de adultos,
                  j&oacute;venes y ni&ntilde;os de las comunidades con la que trabajamos.
                </Text>
              </Box>

              <Box>
                <Text color="gray.700" lineHeight="1.7">
                  Uno de los prop&oacute;sitos m&aacute;s importantes del proyecto es la creaci&oacute;n de recursos
                  did&aacute;cticos y de consulta adecuados para la poblaci&oacute;n y elaborados con criterios
                  t&eacute;cnicos de dise&ntilde;o gr&aacute;fico, ling&uuml;&iacute;stica aplicada (did&aacute;ctica
                  de la lengua y revitalizaci&oacute;n ling&uuml;&iacute;stica) y uso de nuevas tecnolog&iacute;as.
                  El presente sitio web constituye una muestra de esta forma de proceder. Esperamos que sea de
                  utilidad para los miembros del pueblo bribri, as&iacute; como para todas las personas interesadas
                  en la lengua y la cultura de este grupo.
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

              {/* Logos institucionales */}
              <HStack spacing={8} justify="center" pt={4} flexWrap="wrap">
                <Image src={LogoUCR} alt="Universidad de Costa Rica" maxH="60px" objectFit="contain" />
                <Image src={LogoVAS} alt="Vicerrectoria de Accion Social" maxH="60px" objectFit="contain" />
                <Image src={LogoEFLL} alt="Escuela de Filologia, Linguistica y Literatura" maxH="60px" objectFit="contain" />
              </HStack>

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
