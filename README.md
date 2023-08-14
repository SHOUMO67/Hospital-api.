# Hospital-api.
This project is a Hospital an API for the doctors of a Hospital which has been allocated by the govt for testing and quarantine + well being of COVID-19 patients.

# created By Shoumodip Das

Features:

 # There can be 2 types of Users

1. Doctors

2. Patients

- Doctors can log in.
- Each time a patient visits, the doctor will follow 2 steps.
 
3. Register the patient in the app (using phone number, if the patient already exists, just
return the patient info in the API).

4. After the checkup, create a Report.
- Patient Report will have the following fields.

5. Created by doctor.

6. Status - Can be either of: [Negative, Travelled-Quarantine, Symptoms-Quarantine,
Positive-Admit].

8. Date.
Routes:
- /doctors/register → with username and password
- /doctors/login → returns the JWT to be used
- /patients/register
- /patients/:id/create_report
- /patients/:id/all_reports → List all the reports of a patient oldest to latest
- /reports/:status → List all the reports of all the patients filtered by a specific status
