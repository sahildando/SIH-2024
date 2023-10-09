import React from 'react'
import { Box, Heading, Text, Image } from "@chakra-ui/react";
const countryWiseEmissions = require("../images/Co2.gif")
const reducedEmissions = require("../images/co2-2.jpeg")
const dailyEmissions = require("../images/co2-3.png")
const increment = require("../images/increment.png")

const Statistics = () => {
  return (
    <>
    <Box
      px={20}
      py={10}
      fontSize="large"
      backgroundColor="green.700"
      color="white"
    >
      {/* Welcome Section */}
      <Box textAlign="center" mb={8}>
        <Heading as="h1" mb={2}>
          Some Alarming Statistics
        </Heading>
       <ol>
<li> The global average carbon footprint is about 4 tons per person with the highest in the United States (16 tons). </li>
<li>One-fourth of the earth’s species are likely to face extinction within the next 40 years if climate change continues to increase at the current rate. </li>
<li>Reduction in greenhouse gas emissions can help prevent up to 3 million premature deaths yearly by the year 2100.</li>
<li>If each of the 140 million homes in a city replaces its incandescent light bolb with an energy-efficient CFL lamp, it can save enough energy to power over 3 million homes in a year.</li>
</ol>
      </Box>

      {/* What is Ecosavvy Section */}
      <Box mb={8} display={{ md: "flex" }} gap="10">
        <Box flex={{ base: 1, md: 1 }} mb={{ base: 6, md: 0 }}>
          <Heading as="h2" size="lg" mb={2} textAlign="center">
           How Carbon Emissions have increased in past 50 years
          </Heading>
          <Text>
            This is a graph showing how carbon emission have rapidly increasing
            in past years
            <br />
            The average carbon footprint for a person in the United States is 16
            tons, one of the highest rates in the world. Globally, the average
            carbon footprint is closer to 4 tons. To have the best chance of
            avoiding a 2℃ rise in global temperatures, the average global carbon
            footprint per year needs to drop to under 2 tons by 2050.
            <br />
           
          </Text>
        </Box>
        <Box flex={{ base: 1, md: 1 }}>
          <Image
            src={increment}
            alt="Increment"
            maxW="100%"
            borderRadius={5}
          />
        </Box>
      </Box>
<br/>
      {/* Why Choose Ecosavvy Section */}
      <Box mb={8} display={{ md: "flex" }}>
        <Box flex={{ base: 1, md: 1 }} order={{ base: 2, md: 1 }}>
          <Image
            src={countryWiseEmissions}
            alt="countryWiseEmissions"
            maxW="100%"
            borderRadius={10}
          />
        </Box>
        <Box
          flex={{ base: 1, md: 1 }}
          order={{ base: 1, md: 2 }}
          ml={{ md: 4 }}
        >
          <Heading as="h2" size="lg" mb={2} textAlign="center">
           Country Wise Emission Statistics
          </Heading>
          <Text>
            Choose Ecosavvy for a transformative experience in sustainable
            living. Our user-friendly carbon footprint calculator empowers you
            to make informed choices, helping reduce your environmental impact.
            Ecosavvy offers personalized recommendations, actionable insights,
            and a supportive community committed to eco-conscious living. With
            cutting-edge technology and a passion for sustainability, we make it
            easy for you to adopt a greener lifestyle and contribute to a
            healthier planet. Join Ecosavvy today to be a part of the movement
            towards a more sustainable and environmentally conscious world.
          </Text>
        </Box>
      </Box>

      <Box mb={8} display={{ md: "flex" }} gap="10">
        <Box flex={{ base: 1, md: 1 }} mb={{ base: 6, md: 0 }}>
          <Heading as="h2" size="lg" mb={2} textAlign="center">
          Reduced Co2 Emissions in 2020
          </Heading>
          <Text>
            This is a graph showing how carbon emission have rapidly increasing
            in past years
            <br />
            The average carbon footprint for a person in the United States is 16
            tons, one of the highest rates in the world. Globally, the average
            carbon footprint is closer to 4 tons. To have the best chance of
            avoiding a 2℃ rise in global temperatures, the average global carbon
            footprint per year needs to drop to under 2 tons by 2050.
            <br />
           
          </Text>
        </Box>
        <Box flex={{ base: 1, md: 1 }}>
          <Image
            src={reducedEmissions}
            alt="Increment"
            maxW="100%"
            borderRadius={5}
          />
        </Box>
      </Box>

      <Box mb={8} display={{ md: "flex" }}>
        <Box flex={{ base: 1, md: 1 }} order={{ base: 2, md: 1 }}>
          <Image
            src={dailyEmissions}
            alt="increment"
            maxW="100%"
            borderRadius={10}
          />
        </Box>
        <Box
          flex={{ base: 1, md: 1 }}
          order={{ base: 1, md: 2 }}
          ml={{ md: 4 }}
        >
          <Heading as="h2" size="lg" mb={2} textAlign="center">
           Daily Emission Analysis
          </Heading>
          <Text>
            Choose Ecosavvy for a transformative experience in sustainable
            living. Our user-friendly carbon footprint calculator empowers you
            to make informed choices, helping reduce your environmental impact.
            Ecosavvy offers personalized recommendations, actionable insights,
            and a supportive community committed to eco-conscious living. With
            cutting-edge technology and a passion for sustainability, we make it
            easy for you to adopt a greener lifestyle and contribute to a
            healthier planet. Join Ecosavvy today to be a part of the movement
            towards a more sustainable and environmentally conscious world.
          </Text>
        </Box>
      </Box>
    </Box>
    <Box backgroundColor="white" color="green.700" py={4} textAlign="center" fontWeight="bold">
        Made with 💚 by Ecosavvy
      </Box>
      </>
  )
}

export default Statistics