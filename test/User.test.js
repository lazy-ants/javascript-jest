const User = require('../src/User');

var user1 = new User('Alex', 20, 'alex@example.com', {
        house: true,
        car: true
    }),
    user2 = new User('Andrew', 21, 'andrew@example.com', {
        house: true,
        car: false
    });

test('check user1 main data', function() {
    expect(user1.name).toEqual('Alex');
    expect(user1.age).toEqual(20);
    expect(user1.email).toEqual('alex@example.com');
});

test('check user2 main data', function() {
    expect(user2.name).toEqual('Andrew');
    expect(user2.age).not.toEqual(20);
    expect(user2.email).toEqual('andrew@example.com');
});

test('it should be passed even if receivedNames contains additional elements', function() {
    var receivedNames = ['Alex', 'Andrew', 'Nick'],
        expectedNames = [user1.name, user2.name];
    expect(receivedNames).toEqual(expect.arrayContaining(expectedNames));
});

test('it shouldn\'t be passed if receivedNames does not contain expectedNames elements', function() {
    var receivedNames = ['Andrew', 'Nick'],
        expectedNames = [user1.name, user2.name];
    expect(receivedNames).not.toEqual(expect.arrayContaining(expectedNames));
});

test('user1 and user2 additional datas have the same properties', function() {
    expect(user1).toHaveProperty('additionalData.house');
    expect(user1).toHaveProperty('additionalData.car');

    expect(user2).toHaveProperty('additionalData.house');
    expect(user2).toHaveProperty('additionalData.car');
});

test('user1 and user2 additional datas are not the exact same', function() {
    expect(user1.additionalData).not.toBe(user2.additionalData);
});
