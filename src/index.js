import { serve } from "https://deno.land/std/http/mod.ts";

const data = [
        {
            id: 1,
            name: "John Doe",
            email: "john.doe@example.com",
            age: 30,
            image: "https://example.com/images/john_doe.jpg",
            company: "ABC Inc.",
            phone: "123-456-7890"
        },
        {
            id: 2,
            name: "Jane Smith",
            email: "jane.smith@example.com",
            age: 28,
            image: "https://example.com/images/jane_smith.jpg",
            company: "XYZ Corp.",
            phone: "987-654-3210"
        },
        {
            id: 3,
            name: "Michael Johnson",
            email: "michael.johnson@example.com",
            age: 32,
            image: "https://example.com/images/michael_johnson.jpg",
            company: "123 Industries",
            phone: "555-555-5555"
        },
        {
            id: 4,
            name: "Emily Wilson",
            email: "emily.wilson@example.com",
            age: 27,
            image: "https://example.com/images/emily_wilson.jpg",
            company: "ABC Inc.",
            phone: "999-888-7777"
        },
        {
            id: 5,
            name: "Robert Smith",
            email: "robert.smith@example.com",
            age: 35,
            image: "https://example.com/images/robert_smith.jpg",
            company: "XYZ Corp.",
            phone: "111-222-3333"
        },
        {
            id: 6,
            name: "Sarah Davis",
            email: "sarah.davis@example.com",
            age: 29,
            image: "https://example.com/images/sarah_davis.jpg",
            company: "ABC Inc.",
            phone: "444-555-6666"
        },
        {
            id: 7,
            name: "Daniel Johnson",
            email: "daniel.johnson@example.com",
            age: 31,
            image: "https://example.com/images/daniel_johnson.jpg",
            company: "XYZ Corp.",
            phone: "777-888-9999"
        },
        {
            id: 8,
            name: "Olivia Brown",
            email: "olivia.brown@example.com",
            age: 33,
            image: "https://example.com/images/olivia_brown.jpg",
            company: "ABC Inc.",
            phone: "222-333-4444"
        },
        {
            id: 9,
            name: "James Miller",
            email: "james.miller@example.com",
            age: 34,
            image: "https://example.com/images/james_miller.jpg",
            company: "XYZ Corp.",
            phone: "555-666-7777"
        },
        {
            id: 10,
            name: "Sophia Johnson",
            email: "sophia.johnson@example.com",
            age: 26,
            image: "https://example.com/images/sophia_johnson.jpg",
            company: "ABC Inc.",
            phone: "888-999-0000"
        },
        {
            id: 11,
            name: "William Davis",
            email: "william.davis@example.com",
            age: 28,
            image: "https://example.com/images/william_davis.jpg",
            company: "XYZ Corp.",
            phone: "111-222-3333"
        },
        {
            id: 12,
            name: "Ava Wilson",
            email: "ava.wilson@example.com",
            age: 30,
            image: "https://example.com/images/ava_wilson.jpg",
            company: "ABC Inc.",
            phone: "444-555-6666"
        },
        {
            id: 13,
            name: "Matthew Smith",
            email: "matthew.smith@example.com",
            age: 29,
            image: "https://example.com/images/matthew_smith.jpg",
            company: "XYZ Corp.",
            phone: "777-888-9999"
        },
        {
            id: 14,
            name: "Isabella Brown",
            email: "isabella.brown@example.com",
            age: 31,
            image: "https://example.com/images/isabella_brown.jpg",
            company: "ABC Inc.",
            phone: "222-333-4444"
        },
        {
            id: 15,
            name: "Benjamin Davis",
            email: "benjamin.davis@example.com",
            age: 33,
            image: "https://example.com/images/benjamin_davis.jpg",
            company: "XYZ Corp.",
            phone: "555-666-7777"
        },
        {
            id: 16,
            name: "Mia Brown",
            email: "mia.brown@example.com",
            age: 27,
            image: "https://example.com/images/mia_brown.jpg",
            company: "ABC Inc.",
            phone: "888-999-0000"
        },
        {
            id: 17,
            name: "Henry Miller",
            email: "henry.miller@example.com",
            age: 30,
            image: "https://example.com/images/henry_miller.jpg",
            company: "XYZ Corp.",
            phone: "111-222-3333"
        },
        {
            id: 18,
            name: "Charlotte Johnson",
            email: "charlotte.johnson@example.com",
            age: 28,
            image: "https://example.com/images/charlotte_johnson.jpg",
            company: "ABC Inc.",
            phone: "444-555-6666"
        },
        {
            id: 19,
            name: "Alexander Smith",
            email: "alexander.smith@example.com",
            age: 32,
            image: "https://example.com/images/alexander_smith.jpg",
            company: "XYZ Corp.",
            phone: "777-888-9999"
        },
        {
            id: 20,
            name: "Amelia Wilson",
            email: "amelia.wilson@example.com",
            age: 29,
            image: "https://example.com/images/amelia_wilson.jpg",
            company: "ABC Inc.",
            phone: "222-333-4444"
        },
        {
            id: 21,
            name: "Liam Johnson",
            email: "liam.johnson@example.com",
            age: 26,
            image: "https://example.com/images/liam_johnson.jpg",
            company: "XYZ Corp.",
            phone: "555-666-7777"
        },
        {
            id: 22,
            name: "Harper Davis",
            email: "harper.davis@example.com",
            age: 34,
            image: "https://example.com/images/harper_davis.jpg",
            company: "ABC Inc.",
            phone: "888-999-0000"
        },
        {
            id: 23,
            name: "Ethan Brown",
            email: "ethan.brown@example.com",
            age: 31,
            image: "https://example.com/images/ethan_brown.jpg",
            company: "XYZ Corp.",
            phone: "111-222-3333"
        },
        {
            id: 24,
            name: "Lily Wilson",
            email: "lily.wilson@example.com",
            age: 35,
            image: "https://example.com/images/lily_wilson.jpg",
            company: "ABC Inc.",
            phone: "444-555-6666"
        },
        {
            id: 25,
            name: "Daniel Johnson",
            email: "daniel.johnson@example.com",
            age: 27,
            image: "https://example.com/images/daniel_johnson.jpg",
            company: "XYZ Corp.",
            phone: "777-888-9999"
        },
        {
            id: 26,
            name: "Ava Brown",
            email: "ava.brown@example.com",
            age: 30,
            image: "https://example.com/images/ava_brown.jpg",
            company: "ABC Inc.",
            phone: "222-333-4444"
        },
        {
            id: 27,
            name: "Noah Davis",
            email: "noah.davis@example.com",
            age: 33,
            image: "https://example.com/images/noah_davis.jpg",
            company: "XYZ Corp.",
            phone: "555-666-7777"
        },
        {
            id: 28,
            name: "Evelyn Smith",
            email: "evelyn.smith@example.com",
            age: 29,
            image: "https://example.com/images/evelyn_smith.jpg",
            company: "ABC Inc.",
            phone: "888-999-0000"
        },
        {
            id: 29,
            name: "Logan Johnson",
            email: "logan.johnson@example.com",
            age: 28,
            image: "https://example.com/images/logan_johnson.jpg",
            company: "XYZ Corp.",
            phone: "111-222-3333"
        },
        {
            id: 30,
            name: "Mia Davis",
            email: "mia.davis@example.com",
            age: 32,
            image: "https://example.com/images/mia_davis.jpg",
            company: "ABC Inc.",
            phone: "444-555-6666"
        },
        {
            id: 31,
            name: "Lucas Wilson",
            email: "lucas.wilson@example.com",
            age: 27,
            image: "https://example.com/images/lucas_wilson.jpg",
            company: "XYZ Corp.",
            phone: "777-888-9999"
        },
        {
            id: 32,
            name: "Harper Miller",
            email: "harper.miller@example.com",
            age: 31,
            image: "https://example.com/images/harper_miller.jpg",
            company: "ABC Inc.",
            phone: "222-333-4444"
        },
        {
            id: 33,
            name: "Jackson Smith",
            email: "jackson.smith@example.com",
            age: 30,
            image: "https://example.com/images/jackson_smith.jpg",
            company: "XYZ Corp.",
            phone: "555-666-7777"
        },
        {
            id: 34,
            name: "Aria Brown",
            email: "aria.brown@example.com",
            age: 29,
            image: "https://example.com/images/aria_brown.jpg",
            company: "ABC Inc.",
            phone: "888-999-0000"
        },
        {
            id: 35,
            name: "Carter Davis",
            email: "carter.davis@example.com",
            age: 34,
            image: "https://example.com/images/carter_davis.jpg",
            company: "XYZ Corp.",
            phone: "111-222-3333"
        },
        {
            id: 36,
            name: "Scarlett Wilson",
            email: "scarlett.wilson@example.com",
            age: 26,
            image: "https://example.com/images/scarlett_wilson.jpg",
            company: "ABC Inc.",
            phone: "444-555-6666"
        },
        {
            id: 37,
            name: "Gabriel Johnson",
            email: "gabriel.johnson@example.com",
            age: 32,
            image: "https://example.com/images/gabriel_johnson.jpg",
            company: "XYZ Corp.",
            phone: "777-888-9999"
        },
        {
            id: 38,
            name: "Victoria Smith",
            email: "victoria.smith@example.com",
            age: 27,
            image: "https://example.com/images/victoria_smith.jpg",
            company: "ABC Inc.",
            phone: "222-333-4444"
        },
        {
            id: 39,
            name: "Muhammad Davis",
            email: "muhammad.davis@example.com",
            age: 35,
            image: "https://example.com/images/muhammad_davis.jpg",
            company: "XYZ Corp.",
            phone: "555-666-7777"
        },
        {
            id: 40,
            name: "Grace Brown",
            email: "grace.brown@example.com",
            age: 28,
            image: "https://example.com/images/grace_brown.jpg",
            company: "ABC Inc.",
            phone: "888-999-0000"
        }
    ];


serve((_) => Response.json({ success: true, data: data}));