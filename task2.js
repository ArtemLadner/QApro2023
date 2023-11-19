'use strict'

var find_your_company = 'Клієнт 1.2.3';

const company = {
    name: 'Велика Компанія',
    type:'Головна компанія',
    platform: 'Платформа для продажу квитків',
    sellsSolution: 'Рішення для продажу квитків',
    clients: [
        {
            name: 'Клієнт 1',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків',
            partners: [
                {
                    name: 'Клієнт 1.1',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                },
                {
                    name: 'Клієнт 1.2',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                    partners: [
                        {
                            name: 'Клієнт 1.2.3',
                            type: 'subSubCompany',
                            uses: 'Рішення для продажу квитків',
                            sells: 'Рішення для продажу квитків',
                        }
                    ]
                }
            ]
        },
        {
            name: 'Клієнт 2',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків'
        }
    ],
};

function findValueByKey(companyName) {
    const search = (node) => {
        if (node.name === companyName) {
            return node;
        }

        if (node.clients) {
            for (const client of node.clients) {
                if (client.name === companyName) {
                    return client;
                }

                if (client.partners) {
                    const partnerResult = search({ clients: client.partners });
                    if (partnerResult) {
                        return partnerResult;
                    }
                }

                const result = search(client);
                if (result) {
                    return result;
                }
            }
        }

        return null;
    };

    return search(company);
}

let x = find_your_company;
const result = findValueByKey(x);
console.log(result);