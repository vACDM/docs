---
sidebar_position: 1
---

# What is vACDM?

vACDM stands for **virtual Airport Collaboration Decision Making**. It's a tool for the [VATSIM Network](https://vatsim.net).

## A-CDM in general
CDM is a concept that aims to imprve the overall efficiency at an airport.

While the virtual world may not have the same real-world operational complexities, implementing CDM principles on VATSIM can still enhance the overall experience for pilots and controllers.

1. **Realism and Immersion:** By introducing CDM principles into VATSIM, the virtual environment becomes more realistic and immersive. It mirrors real-world aviation operations, which adds to the authenticity of the simulation experience for participants.

2. **Improved Efficiency::** CDM on VATSIM can lead to better traffic flow management, reduced congestion, and smoother operations at busy airports. This can result in more efficient flight planning and execution for pilots and better control coordination for air traffic controllers.

3. **Real-Time Data Sharing:** CDM allows for the real-time exchange of data between pilots and controllers, enabling more effective decision-making. Pilots can provide up-to-date information on their intentions and status (i.e. TOBT), allowing controllers to plan and allocate resources more efficiently.

4. **Reduced Congestion and Delays:** Implementing CDM on VATSIM can lead to a reduction in virtual traffic congestion and delays, allowing for a smoother and more enjoyable experience for all participants.

## Why vACDM?

![vacdm setup](/img/vacdm_setup.png)

- Containerized application easy to setup via Docker for every vACC
- Server <-> Client architecture
- Separate configuration for every aiport (taxitimes, departure capacity, etc.)
- [ECFMP](https://ecfmp.vatsim.net/) support for minimum departure interval (MDI) and average departure interval (ADI)
- Euroscope plugin for communication between controllers and vACDM
- AVDGS for pilots to see their departure information and update their status
<img src="https://i.imgur.com/K2wW9MX.png" width="400" />