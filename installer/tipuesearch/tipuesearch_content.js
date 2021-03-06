var tipuesearch = {
  "pages": [
    {
      "title": "Getting Started", 
      "text": "To log in to the PAC8 app: Tap the PAC8 icon on your mobile device’s home screen or applications menu. Enter your login details: Username Enter your username. Password Enter your password. Tap Login. The Sites menu is displayed. Note If you have forgotten your password, tap Forgotten Password.", 
      "tags": "", 
      "url": "pac8_app.login.html"
    }, 
    {
      "title": "Sites", 
      "text": "This menu contains a list of sites that you can administrate. To select the site to administrate: Tap the name of the site. The main menu appears.", 
      "tags": "", 
      "url": "pac8_app.sites.html"
    }, 
    {
      "title": "Main Menu", 
      "text": "Choose an option: Global Settings Controllers \/ Doors Keys Time Profiles Connect to Controller Installer Menu PAC8 Website Logout When you’re ready, tap ← to return to the Sites menu.", 
      "tags": "", 
      "url": "pac8_app.main.html"
    }, 
    {
      "title": "Global Settings", 
      "text": "To specify the global settings: Enter the following options: Site Name The location of the PAC8 controllers. By default, this is the same as the site name specified using the PAC8 Backend web site. System Access PIN The PIN (Personal Identification Number) used to unlock the door, if PIN\/Prox readers are being used. By default, this option is not set. System Access PIN Length The number of digits in the System Access PIN. By default, this is set to 4. System Alarm PIN The PIN (Personal Identification Number) used to reset the alarm output, if PIN\/Prox readers are being used. By default, this option is switched off. System Alarm PIN Length The number of digits in the System Alarm PIN. By default, this is set to 4. Daylight Saving Toggle on or off. When this option is switched on, controllers adjust for daylight saving time automatically, using European daylight saving rules (2000\/84\/EC). By default, this option is switched off. Tap Save to save the options or Cancel to cancel.", 
      "tags": "", 
      "url": "pac8_app.global.html"
    }, 
    {
      "title": "Controllers \/ Doors", 
      "text": "This menu displays a list of connected controllers. The top line shows the number of configured controllers. To configure an existing controller: Tap the name of the controller. The Controller \/ Door Detail menu is displayed. When you’re ready, tap ← to return to the Main menu. Note You must use the PAC8 Backend web site to add controllers to the system.", 
      "tags": "", 
      "url": "pac8_app.ctrl.html"
    }, 
    {
      "title": "Controller \/ Door Detail", 
      "text": "This menu enables you to check the controller details and specify door options. To specify controller and door details: Check the following options to make sure you are configuring the correct controller: Controller Name Read only. The name of the PAC8 controller. Controller Serial Read only. The serial number of the PAC8 controller. Controller Number Read only. The number of the PAC8 controller on this site. Enter the following options: Door Name Enter a name for the door controlled by this PAC8 controller. By default, this option is not set. Lock Release Time Enter a time in seconds. This determines how long the door is unlocked when a valid key is presented or when Request to Exit (RTE) is pressed. By default, this is set to 5. Door Open Time Enter a time in seconds. If the door remains open for longer than the specified time, a Door Open alarm is generated. By default, this is set to 5. Note You must specify this time when the I\/O mode is set to Door Monitoring. Extra Time Enter a time in seconds. This determines the extra time that the door should remain unlocked for keyholders who need more time to get through the door. By default, this is set to 10. Lock Fails Closed Toggle on or off. When this option is switched on, if there is a fault or power failure, the lock will close (Fail Closed \/ Fail Secure). When switched off, if there is a fault or power failure, the lock will open (Fail Open \/ Fail Safe). By default, this option is switched on. Lock Toggle Toggle on or off. When this option is switched on, the door remains unlocked after a valid access using any key. The door will be locked again when any valid key is presented. By default, this option is switched off. Reader 1 Wire Cut Toggle on or off. When this option is switched on, the PAC8 detects when the Reader 1 wire is cut, and sounds an alarm if the Alarm Output mode is set to Alarm. By default, this option is switched off. Reader 2 Wire Cut Toggle on or off. When this option is switched on, the PAC8 detects when the Reader 2 wire is cut, and sounds an alarm if the Alarm Output mode is set to Alarm. By default, this option is switched off. Touchpad RTE Toggle on or off. When this option is switched on, a keyholder may press the touchpad on the front of the PAC8 controller to request to exit. By default, this option is switched off. Case Tamper Toggle on or off. When this option is switched on, the PAC8 detects when the case tamper switch is triggered. By default, this option is switched off. Case Tamper Alarm Toggle on or off. When this option is switched on, the PAC8 controller sounds an alarm when the the case tamper switch is triggered. By default, this option is switched off. Note To use this option, you must also set Case Tamper to On and set the Alarm Output mode to Alarm. LED Follows Lock Toggle on or off. When this option is switched on, the LED on the front of the PAC8 glows to indicate the status of the lock: red when locked, green when unlocked. By default, this option is switched off. LED Heartbeat Toggle on or off. When this option is switched on, the LED on the front of the PAC8 flashes blue intermittently to indicate that the controller is working. By default, this option is switched off. Select Reader Configuration Select an option from the pop-up menu: No Readers No readers or external RTE switch in use. This option is selected by default. Reader In, RTE In reader and external RTE switch in use; out reader not used. Reader In, Reader Out In reader and out reader in use; external RTE switch not used. Or choose Cancel. Select Reader Option Select an option from the pop-up menu: Proximity Only Keyholders must present a valid token to unlock the door. This option is selected by default. PIN Only Keyholders must enter the system access PIN to unlock the door. Proximity and PIN Keyholders must present a valid token and enter the system access PIN to unlock the door. Proximity or PIN Keyholders must present a valid token or enter the system access PIN to unlock the door. Or choose Cancel. Select Door Contact Mode Select an option from the pop-up menu: General Purpose Input The controller input is used as a general purpose input. This option is selected by default. Present The controller input is used for a door contact, to enable door monitoring. Or choose Cancel. Note You must also select the appropriate I\/O mode. Select Alarm Output Mode Select an option from the pop-up menu: General Purpose Output The controller output is used as a general purpose output. This option is selected by default. Alarm The controller output is used as an alarm output, e.g. to trigger a sounder. Or choose Cancel. Note You must also select the appropriate I\/O mode. Select I\/O Mode Select an option from the pop-up menu: No Output The controller output does nothing. This option is selected by default. Door Monitoring If the door is forced open, or if the door is held open for longer than the Door Open time, an alarm is generated. For this mode, Door Contact mode must be set to Present and Alarm Output mode must be set to Alarm. Follow input (Timed) When the input is triggered, the output is triggered for the length of time specified by Follow Input Duration. For this mode, Door Contact mode must be set to General Purpose Input and Alarm Output mode must be set to General Purpose Output. Follow input (Latched) When the input is triggered, the output is triggered until you deactivate it with the PAC8 app. For this mode, Door Contact mode must be set to General Purpose Input and Alarm Output mode must be set to General Purpose Output. Or choose Cancel. Follow Input Duration Enter a time in seconds. This determines how long the output is triggered when the I\/O mode is set to Follow input (triggered). Time Profile Select an option from the pop-up menu: Time Profile Name To apply this time profile. None To apply no time profile. This option is selected by default. Or choose Cancel. Tap Save to save the options or Cancel to cancel.", 
      "tags": "io latch", 
      "url": "pac8_app.ctrl.details.html"
    }, 
    {
      "title": "Keys", 
      "text": "This menu displays a list of configured keys. The top line shows the number of configured keys. To configure an existing key: Tap the name of the key. The Key Details menu is displayed. When you’re ready, tap ← to return to the Main menu. To add a new key: Tap Add. The Key Details menu is displayed. When you’re ready, tap ← to return to the Main menu.", 
      "tags": "", 
      "url": "pac8_app.keys.html"
    }, 
    {
      "title": "Key Details", 
      "text": "This menu enables you to scan a key’s QR code (Quick Response Code) and specify other key details. Alternatively, it enables you to delete the key. To specify the key details: Specify the following options. Name Enter the name of the keyholder. Key Code Enter the key code. To scan a key’s QR code, tap Scan. System Alarm PIN Toggle on or off. When this option is switched on, the keyholder can set and unset the alarm output by presenting this key to a PIN\/Prox reader and entering the System Alarm PIN. By default, this option is switched off. To use this option, the I\/O mode must be set to Door Monitoring. See here. Extra Door Time Toggle on or off. When this option is switched on, this keyholder has extra time to get through the door. By default, this option is switched off. Passage Mode Toggle on or off. When this option is switched on, if this keyholder presents a key twice within the lock release time, the door is unlocked and remains unlocked until the key is presented twice again. By default, this option is switched off. Important Passage mode can only be cancelled by presenting the key twice. A door unlocked using the passage mode facility is not locked by a time profile’s end time. To add a time profile to the key, tap Access Profile 1. The Key Access Details menu is displayed. To add another time profile to the key, tap Access Profile 2. The Key Access Details menu is displayed. Tap Save to save the options or Cancel to cancel. To delete the key: Tap Delete. Note The key will not work until you synchronise the details with the controller. See here.", 
      "tags": "io", 
      "url": "pac8_app.keys.details.html"
    }, 
    {
      "title": "Key Access Details", 
      "text": "This menu enables you to specify a time profile for the key and the areas that the key can access. To specify key access details: Enter the following options: Time profile Select an option from the pop-up menu: Time Profile Name To apply this time profile. None To apply no time profile. This option is selected by default. Or choose Cancel. Access A list of areas. Toggle each area on or off to specify whether the key can access this area. By default, access to each area is switched off. Tap Save to save the options or Cancel to cancel.", 
      "tags": "", 
      "url": "pac8_app.keys.profile.html"
    }, 
    {
      "title": "Time Profiles", 
      "text": "This menu displays a list of configured time profiles. The top line shows the number of configured time profiles. To configure an existing time profile: Tap the name of the time profile. The Time Profile Details menu is displayed. When you’re ready, tap ← to return to the Main menu. To add a new time profile: Tap Add. The Time Profile Details menu is displayed. When you’re ready, tap ← to return to the Main menu.", 
      "tags": "", 
      "url": "pac8_app.times.html"
    }, 
    {
      "title": "Time Profile Details", 
      "text": "This menu enables you to specify up to four time periods in a time profile, and specify the days when they apply. Alternatively, it enables you to delete the time profile. To configure the time profile: Enter the following options: Profile name Enter a name for the time profile. Period 1 Select a start and end time from the pop-up menu. By default, the start and end time are set to 00:00. Period 2 Select a start and end time from the pop-up menu. By default, the start and end time are set to 00:00. Period 3 Select a start and end time from the pop-up menu. By default, the start and end time are set to 00:00. Period 4 Select a start and end time from the pop-up menu. By default, the start and end time are set to 00:00. Assign to days Select an option from the pop-up menu: All The time profile is applied on every day of the week. This option is selected by default. Weekdays The time profile is applied on Monday to Friday only. Weekends The time profile is applied on Saturday and Sunday only. Or choose Cancel. Tap Save to save the options or Cancel to cancel. To delete the time profile: Tap Delete.", 
      "tags": "", 
      "url": "pac8_app.times.details.html"
    }, 
    {
      "title": "Connect to Controller", 
      "text": "This menu enables you to connect your mobile device to a PAC8 controller via Bluetooth. Notes Bluetooth must be enabled on your mobile device to connect to a controller. The controller must be within Bluetooth range of the mobile device. The customer must have granted you to access the controller. To connect to a controller: If necessary, tap Scan for Controllers to scan for controllers. (You don’t usually need to do this — the PAC8 app starts scanning for controllers as soon as this menu is displayed.) If any controllers are discovered, they are displayed as menu options. Tap the controller that you want to connect to. The Synchronisation menu is displayed. When you’re ready, tap ← to return to the Main menu.", 
      "tags": "", 
      "url": "pac8_app.connect.html"
    }, 
    {
      "title": "Synchronisation", 
      "text": "This menu enables you to work with a connected PAC8 controller via Bluetooth. To work with a connected controller: Choose an option: Installer Test Displays the Installer Test menu, which enables you to test the controller’s inputs and outputs. Synchronise Controller Uploads settings and key data from your mobile device to the controller. Existing settings and key data on the controller are overwritten. When the warning message appears, tap OK to continue synchronisation or Cancel to cancel. Reset Output Resets a latched output. Events Displays the Events menu, so that you can view a list of recent controller events. Firmware Update Displays the Firmware Update menu, so that you can view the current controller firmware and update it if necessary. When you’re ready, tap ← to return to the Connect to Controller menu.", 
      "tags": "upload latch", 
      "url": "pac8_app.connect.sync.html"
    }, 
    {
      "title": "Installer Test", 
      "text": "This menu enables enables you to test the controller’s inputs and outputs. Choose an option: Input Tests Displays the Input Tests menu. Output Tests Displays the Output Tests menu. When you’re ready, tap ← to return to the Synchronisation menu.", 
      "tags": "", 
      "url": "pac8_app.connect.test.html"
    }, 
    {
      "title": "Input Tests", 
      "text": "This menu displays the status of each of the controller’s inputs. To test the inputs: Activate each input in turn and check its status indicator: RTE Switch Red The RTE Switch is inactive. Green The RTE Switch is being pressed. Touch Button Red The controller touch button is inactive. Green The controller touch button is being pressed. Case Tamper Red The case tamper switch is open (tamper). Green The case tamper switch is closed (normal). Door Contact Red The door contact is open (forced). Green The door contact is closed (normal). Reader 1 Status Red The reader is inactive. Green The reader is in use. Reader 2 Status Red The reader is inactive. Green The reader is in use. When you’re ready, tap ← to return to the Installer Test menu. Note It may take up to a second for the correct input status to be shown in this menu.", 
      "tags": "", 
      "url": "pac8_app.connect.in.html"
    }, 
    {
      "title": "Output Tests", 
      "text": "This menu lists each of the controller’s outputs. To test the outputs: Choose each option in turn and check that the corresponding output is activated. Each option is a toggle — tap once to activate the output, tap again to deactivate: Lock Test Red The lock is locked. Green The lock is unlocked. Output Test Red The output is open (normal). Green The output is closed (active). R1 LED Test Red The Reader 1 LED is red. Green The Reader 1 LED is green. R2 LED Test Red The Reader 2 LED is red. Green The Reader 2 LED is green. When you’re ready, tap ← to return to the Installer Test menu.", 
      "tags": "", 
      "url": "pac8_app.connect.out.html"
    }, 
    {
      "title": "Events", 
      "text": "This menu enables you to view recent events from the connected PAC8 controller. To view events: To download events from the controller, tap Sync. A list of recent events is displayed. This shows all the events that the controller has logged since the last time you downloaded events. To view details of an event, tap the event. The Event Details page is displayed. When you’re ready, tap ← to return to the Synchronisation menu. Note The list of downloaded events is cleared when you leave this menu, or if you tap Sync again.", 
      "tags": "", 
      "url": "pac8_app.connect.event.html"
    }, 
    {
      "title": "Event Details", 
      "text": "This menu enables you to see the details of an event. To view event details: Check the following options: Time Read only. The date and time of the event. Description Read only. A description of the event. Keycode Read only. The keycode associated with this event. If none, the keycode is listed as all 0 s. For Unknown ID errors only: to add the unknown key to the database, tap Add Key to Database. The Key Details menu is displayed. When you’re ready, tap ← to return to the Events menu.", 
      "tags": "", 
      "url": "pac8_app.connect.details.html"
    }, 
    {
      "title": "Firmware Update", 
      "text": "This menu enables you to view the current controller firmware and update it if necessary. To check the controller firmware: Check the following options: Current Firmware The version number of the current PAC8 controller firmware. Available Firmware A list of available firmware images. To update the controller firmware, tap the firmware image you want. The firmware is downloaded and installed. The status of the process is displayed at the bottom of the screen. When you’re ready, tap ← to return to the Synchronisation menu.", 
      "tags": "", 
      "url": "pac8_app.connect.fw.html"
    }, 
    {
      "title": "Installer", 
      "text": "This menu enables an installer to record the outcome of a site visit. Choose an option: Installation Complete Logs the installation as complete. Repair Complete Logs the repair as complete. Second Visit Required Logs the site as requiring a second visit. When you’re ready, tap ← to return to the Main menu.", 
      "tags": "", 
      "url": "pac8_app.install.html"
    }, 
    {
      "title": "PAC8 Website", 
      "text": "This menu item opens your mobile device’s browser app and displays the PAC8 website.", 
      "tags": "", 
      "url": "pac8_app.help.html"
    }, 
    {
      "title": "Logout", 
      "text": "This menu item logs you out of the PAC8 app.", 
      "tags": "", 
      "url": "pac8_app.logout.html"
    }
  ]
}
;
