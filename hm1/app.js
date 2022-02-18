const fs = require('fs');
const path = require('path');

onlineUsers = {name: "Bogdan", age: 22, city: "Lviv"};
inPersonUsers = {name: "Andriy", age: 22, city: "Lviv"};

fs.mkdir(path.join(__dirname, 'main'), {recursive: true}, (err) => {
    if (err) {
        console.log(err);
        throw err;
    }
    fs.mkdir(path.join(__dirname, 'main', 'online'), {recursive: true}, (err) => {
        if (err) {
            console.log(err);
            throw err;
        }
    })
    fs.mkdir(path.join(__dirname, 'main', 'inPerson'), {recursive: true}, (err) => {
        if (err) {
            console.log(err);
            throw err;
        }
        fs.writeFile(path.join(__dirname, 'main', 'online', 'online.txt'),
            `Name: ${onlineUsers.name} Age:${onlineUsers.age} City:${onlineUsers.city}`, (err) => {
                if (err) {
                    console.log(err);
                    throw err;
                }
            })
        fs.writeFile(path.join(__dirname, 'main', 'inPerson', 'inPerson.txt'),
            `Name: ${inPersonUsers.name} Age:${inPersonUsers.age} City:${inPersonUsers.city}`, (err) => {
                if (err) {
                    console.log(err);
                    throw err;
                }
                fs.readFile(path.join(__dirname, 'main', 'online', 'online.txt'), (err, onlineData) => {
                    if (err) {
                        console.log(err);
                        throw err;
                    }
                    fs.readFile(path.join(__dirname, 'main', 'inPerson', 'inPerson.txt'), (err, inPersonData) => {
                        if (err) {
                            console.log(err);
                            throw err;
                        }
                        fs.appendFile(path.join(__dirname, 'main', 'online', 'online.txt'), `${inPersonData}`, {flag: 'w'}, (err) => {
                            if (err) {
                                console.log(err);
                                throw err;
                            }
                        })
                        fs.appendFile(path.join(__dirname, 'main', 'inPerson', 'inPerson.txt'), `${onlineData}`, {flag: 'w'}, (err) => {
                            if (err) {
                                console.log(err);
                                throw err;
                            }
                        })
                    })
                })
            })

    })
})













