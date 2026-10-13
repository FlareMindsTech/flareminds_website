Phase 1 – Attendance Changes Notes
1. Automatic Punch-out

Employee 8.5 hours / 510 minutes work pannina, punch-out pannala na system automatic-ah punch-out pannum.

Backend-la every 5 minutes active attendance check aagum.

2. Manual Punch-out Rules

510 minutes-ku less work pannina → Half Day

510 minutes or more work pannina → Present

3. Auto Punch-out Details

Auto punch-out aana record-la:

status: "Present"
logoutType: "AUTO"
totalWorkingMinutes: 510
totalHours: 8.5
4. Manual / Auto Tracking

Employee manual-ah logout pannina → logoutType: "MANUAL"

System automatic-ah logout pannina → logoutType: "AUTO"

5. Late Arrival Handling

isLate boolean separate-ah preserve pannom.

Late-ah vandhaalum, complete working day-ku final status Present ah irukkum.

6. IST Timezone

Attendance calculation-ku Asia/Kolkata / IST timezone use pannom.

Late arrival and date calculation correct-ah work aagum.

7. Scheduler Safety

Already manual punch-out aana record-a scheduler again update pannaadhu.

status: "Working" and logoutTime: null records mattum auto punch-out check pannum.

Atomic update use pannirukkom, so duplicate auto punch-out avoid aagum.

8. Testing

Phase 1 tests: 7/7 passed

Backend startup and Attendance Scheduler successfully verified.




ila  bro yethum change pana venam....

but i want three method 

 1.radius 200 meter use pani geo location ithu thaaan ipo pain yegga company ku use panuvom naa itha venna mobile ku apk vaa download panni use panuran this logic ku bec wifi current polaam ...

wifi IP address connect la irutha location track panalaamm for desktop application ku also this is  saas product .

nama hardware punch in machine iruku la atha connect panni  nama project la track panura option venum





itha three option num nama project la venum but 2 and 3 un used da command la irukatum but code inside paniru

1 thaaan yegga office may be mobile la use pana thaan



also yenaku ku possible la  kudu this three option num inside pani one mattum use panalaam ma ila separete file create pani use panalaam ma 
