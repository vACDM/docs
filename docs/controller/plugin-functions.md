---
sidebar_position: 3
---

# vACDM Tag Item Functions

| ENUM                 | Function                                                                                              |
| -------------------- | ----------------------------------------------------------------------------------------------------- |
| EXOT_MODIFY          | sets an EXOT as time string (calls OnGetItagItem again, but with set ItemString)                      |
| EXOT_NEW_VALUE       | updates EXOT using the time string                                                                    |
| TOBT_NOW             | sends TOBT = now and tobt_state = "CONFIRMED"                                                         |
| TOBT_MANUAL          | Opens a popup edit, sets itemString                                                                   |
| TOBT_MANUAL_EDIT     | sends set ItemString as new TOBT                                                                      |
| TOBT_CONFIRM         | resends set TOBT with tobt_state = "CONFIRMED"                                                        |
| TOBT_MENU            | groups TOBT_NOW, TOBT_MANUAL, TOBT_CONFIRM using built-in PopupList                                   |
| ASAT_NOW             | sends ASAT now and ASRT if not set                                                                    |
| ASAT_NOW_AND_STARTUP | same as ASAT_NOW and sets "ST-UP" ground state                                                        |
| STARTUP_REQUEST      | sends ASRT = now                                                                                      |
| OFFBLOCK_REQUEST     | sends Aort = now                                                                                      |
| AOBT_NOW_AND_STATE   | sends ASRT if not set, sends Aobt = now, sets TAXI ground state if taxizone is taxiout or PUSH if not |
| RESET_TOBT           | sends defaultTime, including the current tobt_state                                                   |
| RESET_ASAT           | sends defaultTime, sets NSTS ground state                                                             |
| RESET_ASRT           | sends defaultTime                                                                                     |
| RESET_TOBT_CONFIRM   | sends set TOBT, but tobt_state = "GUESS"                                                              |
| RESET_AORT           | sends defaultTime                                                                                     |
| RESET_AOBT_AND_STATE | sends defaultTime, sets NSTS ground state                                                             |
| RESTE_MENU           | groups all reset items using built-in PopupList                                                       |
| RESET_AIRCRAFT       | sends a DELETE request for that flight                                                                |
