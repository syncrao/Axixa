
const obj = [
    {
  "id": "2718036f-78a4-48bb-857d-7e4194f0afcd",
  "user_id": null,
  "parant_id": "2c428c5b-8cf2-4b1c-9a3c-af5499feb8c8",
  "class_id": "1b8ac446-09f5-460c-9b43-5ddc890fd846",
  "section_id": "f50a43da-6fec-4f89-ada4-cb25b4995b8f",
  "admission_no": "ADM11",
  "roll_number": "11",
  "first_name": "Student",
  "last_name": "11",
  "gender": "male",
  "dob": "2015-01-01",
  "phone": "8888811",
  "address": "Town",
  "admission_date": "2025-06-16",
  "academic_year": "2025",
  "status": "active",
  "deleted_at": null,
  "created_at": "2025-06-16T10:46:01.000000Z",
  "updated_at": "2025-06-18T06:09:32.000000Z",
  "parant": {
    "id": "2c428c5b-8cf2-4b1c-9a3c-af5499feb8c8",
    "user_id": "18be0e07-bd3e-4d06-80ae-559bf059b6e1",
    "father_name": "Father 11",
    "mother_name": "Mother 11",
    "guardian_name": "Guardian 11",
    "guardian_relation": "Father",
    "phone": "8888811",
    "address": "Town",
    "occupation": "Job",
    "created_at": "2025-06-16T10:46:01.000000Z",
    "updated_at": "2025-06-18T06:09:32.000000Z"
  },
  "user": null
},
{
  "id": "2718036f-78a4-48bb-857d-7e4194f0afcd",
  "user_id": null,
  "parant_id": "2c428c5b-8cf2-4b1c-9a3c-af5499feb8c8",
  "class_id": "1b8ac446-09f5-460c-9b43-5ddc890fd846",
  "section_id": "f50a43da-6fec-4f89-ada4-cb25b4995b8f",
  "admission_no": "ADM11",
  "roll_number": "11",
  "first_name": "Student",
  "last_name": "11",
  "gender": "male",
  "dob": "2015-01-01",
  "phone": "8888811",
  "address": "Town",
  "admission_date": "2025-06-16",
  "academic_year": "2025",
  "status": "active",
  "deleted_at": null,
  "created_at": "2025-06-16T10:46:01.000000Z",
  "updated_at": "2025-06-18T06:09:32.000000Z",
  "parant": {
    "id": "2c428c5b-8cf2-4b1c-9a3c-af5499feb8c8",
    "user_id": "18be0e07-bd3e-4d06-80ae-559bf059b6e1",
    "father_name": "Father 11",
    "mother_name": "Mother 11",
    "guardian_name": "Guardian 11",
    "guardian_relation": "Father",
    "phone": "8888811",
    "address": "Town",
    "occupation": "Job",
    "created_at": "2025-06-16T10:46:01.000000Z",
    "updated_at": "2025-06-18T06:09:32.000000Z"
  },
  "user": null
}
]

const need = obj.map(({ parant, ...rest }) => ({
    ...rest,
    ...(parant || {})
}));

console.log(need)

