---
sidebar_position: 1
---

# Use vACDM as a controller

## Working with vACDM

The plugin vACDM is designed to use it without diving deep into the ACDM procedure. It can be used if the controller is aware of the basic procedures. Next to that, the pilot does not need to be aware of the topic at all, it will work with all kind of pilots.

:::caution

When using vACDM, the enroute and startup clearance should be issued seperately.

:::

Enroute clearance can be issued whenever the pilot requests it. Startup should only be approved when the pilot is able to push and/or start the engines within the next 5 minutes. 


## vACDM Master
:::note

Before you set yourself to master be sure to set your runway configuration in Euroscope correctly!

:::
In order to be able to edit times in the plugin list, the ATC has to insert ```.vacdm master``` inside the Euroscope console. The default setting is always read only.



## Set TOBT

vACDM works best when the TOBT is up to date and the pilot is completely ready at that time. The filed EOBT is always a good first guess. If there is no valid time available (empty TOBT, time in the past or to far in the future - TOBT orange), ATC should ask the pilot if he has a time where he is fully ready for pushback. That time should be entered as TOBT. 

Pilots are able to set their TOBT at vacdm.vatger.de where they can see their TOBT, TSAT, planned runway and SID.
More information here: VDGS

:::tip

Confirmed TOBT (by ATC or pilot) is displayed in dark green.

:::

## Issue Startup

As soon as the TSAT is displayed in dark green, startup can be issued. If the pilot calls in before that and it is still shown in light green, the TOBT can be set to now and the TSAT will be recalculated. That new TSAT will not be later than the previous one, but might be earlier if there is a gap in the sequence. If ATC can assume that there will be no benefit in updating to an earlier TOBT (e.g. due to a high traffic load and a small time difference to the TSAT), the TOBT does not need to be updated as the TSAT might remain the same.

As soon as the outbound is ready and startup can not be issued e.g. due to TSAT, the ASRT should be set to mark the aircraft requested startup. You will see a "R" next to the TSAT to indicate the outbound is ready.

If the TSAT is shown in orange, the pilot missed the window for startup and the TOBT has to be set to now to recalculate a new TSAT.


## TTOT Monitoring

To check if the airport runways are within the capacity limits you could check the TTOTs (within the startup/departure and taxi out list). As long as the TTOT is green, the outbound is still within the calculated timeframe(that might be up to +9 minutes after TTOT). If the TTOT is orange it takes longer as calculated. A few orange TTOTs are still fine for an efficient traffic flow but it shouldn't get too much.

## Delay Startup

Depending on the traffic situation it might be necessary to delay startups even if vACDM is used (e.g. Tower does not get the traffic out as expected - many orange TTOTs). Initially you should delay startup within the +/- 5 minutes range according startup. 

> DLH123 expect startup according TSAT + 5