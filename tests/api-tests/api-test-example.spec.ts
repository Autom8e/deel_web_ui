/* eslint-disable no-undef */
import { test, expect } from '@playwright/test';

test.describe('Create and retrieve the record tests', () => {
    test('create the record test', async ({ request }) => {
        const response = await request.post('https://petstore.swagger.io/v2/pet', {
            data: {
                id: 557,
                category: {
                    id: 0,
                    name: "bulldog"
                },
                name: "kucu kucu",
                status: "na"
            }
        });
        console.log(await response.json(), "with json() method");
        await expect(response).toBeOK();
        console.log(response.ok());
        console.log(await response.text(), "with text() method");
        expect(response.status()).toBe(200)
    });

    test('get the record test', async ({ request }) => {
        const response = await request.get(`https://petstore.swagger.io/v2/pet/557`);
        const responseBody = await response.json();

        console.log(await responseBody)
        await expect(response).toBeOK();
        expect(response.status()).toBe(200);
        expect(responseBody.name).toBe("kucu kucu");
    });
});

test('update the record test', async ({ request }) => {
    const updateResp = await request.put('https://petstore.swagger.io/v2/pet', {
        data: {
            id: 557,
            category: {
                id: 0,
                name: "bulldog-updated name"
            },
            name: "kucu kucu",
            status: "na"
        }
    })
    console.log(await updateResp.json(), "updateResp with json() method")
    expect(updateResp.status()).toBe(200)
})

test('delete the record test', async ({ request }) => {
    const deleteResp = await request.delete('https://petstore.swagger.io/v2/pet/557')
    console.log(await deleteResp.json(), "deleteResp with json() method")
    expect(deleteResp.status()).toBe(200)
})