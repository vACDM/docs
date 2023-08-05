---
sidebar_position: 1
---

# Use vACDM as a pilot

## How does vACDM work?

The system behind ACDM is very complex and it is not necessary for you as the pilot to understand it in every detail. Due to some simulator and network limitations, vACDM also can't simulate every aspect of its real world counterpart, mainly prohibiting network-wide flow management.

![vACDM Process](/img/vacdm_process.png)

## ACDM times

There are many different times used in ACDM procedures. However, we will only list the ones that are relevant for you as the pilot here. Keep in mind that all times are given in UTC.

### EOBT (Estimated Off-Block Time)

This is the time when you estimate to be ready for pushback during the creation of your flight plan. ATC will use it as an initial, but unconfirmed indication of when you are going to be ready.

:::note

When prefiling from SimBrief, an EOBT will automatically be added to your flight plan. This time will be calculated based on when you start creating your SimBrief flight plan + 30 minutes. If you plan to depart earlier or later, it is recommended to change this time.

:::

### TOBT (Target Off-Block Time)

During the preparation of the aircraft, you might realize that you will be ready earlier or later than your original estimate. Keeping your TOBT up to date will help ATC to reduce delays and ensure a smooth operation. When you set a TOBT, ATC will treat it as a confirmed time and calculate your TSAT based on it. If you realize during any part of your preparation that a new estimate will differ more than 5 minutes from the previous one, you should set a new TOBT.

:::note

To set your TOBT, we recommend using the vACDM pilot interface, which allows you to set it on your own. If you did not set a TOBT yourself already, ATC will have to ask you to report your TOBT, which will lead to unnecessary frequency congestion.

:::

:::note

It is generally good practice to set your initial TOBT 20-30 minutes in advance and request enroute clearance 10-15 minutes before your TOBT to ensure the information is available for ATC planning and that the controller can inform you of any potential delays or slot restrictions ahead of time.

:::

:::tip

If you do not set a TOBT, ATC might not be able to approve your startup right away when you are ready. Especially during periods of high traffic, not setting a TOBT ahead of time can result in delays for you.

:::

### TSAT (Target Startup Approval Time)

This is the time when ATC is planning to approve your startup. Keep in mind that it is ultimately your responsibility as the pilot to request startup within the TSAT window; don't rely on the controller to call you for your startup. You can always find your current TSAT on the virtual VDGS in the vACDM pilot interface.

In an optimal situation, your TOBT and TSAT will be at the same time. However, if there are more aircraft wanting to depart than the airport can currently accommodate, startups will be delayed and your TSAT will be at a later time than your TOBT.

:::note

If you miss your TSAT window (TSAT ± 5 minutes), the gap for departure is lost and a new TSAT has to be generated. Be aware that your TSAT can improve (and occasionally also worsen) depending on the general traffic situation and other aircraft's TOBTs.

:::

:::note

Pushback needs to be requested within 5 minutes of your startup approval. At taxi-out positions you have 10 minutes to call for taxi. After that time the startup approval is invalid and you will be told to recontact Delivery, who has to generate a new TSAT.

:::

### CTOT (Calculated Take-Off Time)

This is the actual slot. On VATSIM, you will usually not be issued a CTOT, so it is not a big deal to depart a little bit later or earlier than what ATC had originally planned. However, during some busy events with slot bookings or if there are flow measures in place for your route, you will be given a compulsory CTOT and have to depart in this CTOT window (CTOT - 5/+10 minutes). When you are given a CTOT, it is very important to meet it as another slot might not be available for over an hour.