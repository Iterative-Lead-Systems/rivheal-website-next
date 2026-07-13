# Mobile App Screenshots for Website

Add these mobile app screenshots to enhance your website's patient experience pages.

## Recommended Screenshots from Mobile App

Based on the mobile app features, these screens would best showcase what patients get:

### Core Features to Screenshot:

1. **Home Screen** (`/src/screens/home/HomeScreen.tsx`)
   - File: `mobile/home-screen.jpg`
   - Use: Show on patient-experience page
   - Displays: Dashboard overview, quick actions

2. **Book Appointment Screen** (`/src/screens/appointments/BookAppointmentScreen.tsx`)
   - File: `mobile/booking-screen.jpg`
   - Use: Patient experience page, showcase smart appointment booking
   - Shows: Real-time queue tracking, best times to visit

3. **Queue Tracking Screen** (`/src/screens/appointments/QueueTrackingScreen.tsx`)
   - File: `mobile/queue-screen.jpg`
   - Use: Patient experience page
   - Shows: Live wait times, current position in queue

4. **Medical Records Screen** (`/src/screens/medicalRecords/MedicalRecordsScreen.tsx`)
   - File: `mobile/records-screen.jpg`
   - Use: Patient experience page
   - Shows: Portable health data, cross-hospital access

5. **Symptom Checker Screen** (`/src/screens/symptomChecker/SymptomCheckerScreen.tsx`)
   - File: `mobile/symptom-checker.jpg`
   - Use: Patient experience page
   - Shows: Health guidance, symptom assessment

6. **Chat Assistant Screen** (`/src/screens/ChatAssistantScreen.tsx`)
   - File: `mobile/chat-assistant.jpg`
   - Use: Patient experience page
   - Shows: Health guidance assistant

7. **Telemedicine Screen** (`/src/screens/telemedicine/TelemedicineScreen.tsx`)
   - File: `mobile/telemedicine-screen.jpg`
   - Use: Patient experience page
   - Shows: Remote consultations

8. **Home Care Appointment** (`/src/screens/appointments/BookAppointmentScreen.tsx`)
   - File: `mobile/home-care-booking.jpg`
   - Use: Home care waitlist page
   - Shows: Home care service booking flow

## Where to Add These Images

### 1. Patient Experience Page (`/app/patient-experience/page.tsx`)
Add a mobile app showcase section after the features grid showing:
- Screenshots carousel or grid of 3-4 key screens
- Suggested images: home-screen, booking-screen, records-screen, symptom-checker

### 2. Home Care Waitlist Page (`/app/home-care-waitlist/page.tsx`)
Add section showing mobile app home care flow:
- Emergency access button
- Home care booking interface
- Live practitioner tracking

## Recommended Dimensions

**Mobile phone screenshots:** 1080 × 2340 px (9:19.5 aspect ratio)
- Crop to show phone frame (optional)
- Reduce to 500-800px width for web display
- Optimize to < 200 KB per image (JPEG quality 75-80)

## File Organization

Place images in `/public/images/mobile-app/` folder:

```
public/images/mobile-app/
├── home-screen.jpg
├── booking-screen.jpg
├── queue-screen.jpg
├── records-screen.jpg
├── symptom-checker.jpg
├── chat-assistant.jpg
├── telemedicine-screen.jpg
└── home-care-booking.jpg
```

## Next Steps

1. Screenshot each recommended screen from the mobile app
2. Crop to show just the phone screen area
3. Save as JPEG (quality 75-80) to `/public/images/mobile-app/`
4. Update component files to reference these images
5. Test responsive display on mobile and desktop
