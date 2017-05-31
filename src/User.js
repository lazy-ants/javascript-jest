function User(name, age, email, additionalData) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.additionalData = additionalData;
}

User.prototype.getName = function getName() {
    return this.name;
};

User.prototype.getAge = function getAge() {
    return this.age;
};

User.prototype.getAdditionalData = function getAdditionalData() {
    return this.additionalData;
};

module.exports = User;
