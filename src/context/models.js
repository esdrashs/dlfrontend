// User model
export class User {
  constructor({ username, password, isActive, isAdmin, isClerk, isManager, isAuditor, triesCount, paymentPOSMid, personID, person, logs }) {
    this.username = username;
    this.password = password;
    this.isActive = isActive;
    this.isAdmin = isAdmin;
    this.isClerk = isClerk;
    this.isManager = isManager;
    this.isAuditor = isAuditor;
    this.triesCount = triesCount;
    this.paymentPOSMid = paymentPOSMid;
    this.personID = personID;
    this.person = person;
    this.logs = logs || [];
  }
}

// Person model
export class Person {
  constructor({ id, name, midleName, lastName, birthDate, adress, mariState, gender, idType, email, cellphone, active, photo, users, clientes }) {
    this.id = id;
    this.name = name;
    this.midleName = midleName;
    this.lastName = lastName;
    this.birthDate = birthDate;
    this.adress = adress;
    this.mariState = mariState;
    this.gender = gender;
    this.idType = idType;
    this.email = email;
    this.cellphone = cellphone;
    this.active = active;
    this.photo = photo;
    this.users = users || [];
    this.clientes = clientes || [];
  }
  get fullName() {
    return `${this.lastName}, ${this.name}`;
  }
}

// Supplier model
export class Supplier {
  constructor({ id, supplierName, supplierDesc, supplierLocation, supplierAddress, shopContactName, inactive, supplierContactPhone, supplierContactEmail, logo, products, models }) {
    this.id = id;
    this.supplierName = supplierName;
    this.supplierDesc = supplierDesc;
    this.supplierLocation = supplierLocation;
    this.supplierAddress = supplierAddress;
    this.shopContactName = shopContactName;
    this.inactive = inactive;
    this.supplierContactPhone = supplierContactPhone;
    this.supplierContactEmail = supplierContactEmail;
    this.logo = logo;
    this.products = products || [];
    this.models = models || [];
  }
}

// Shop model
export class Shop {
  constructor({ id, shopName, shopDesc, shopLocation, shopAddress, primary, shopManager, user, products, models }) {
    this.id = id;
    this.shopName = shopName;
    this.shopDesc = shopDesc;
    this.shopLocation = shopLocation;
    this.shopAddress = shopAddress;
    this.primary = primary;
    this.shopManager = shopManager;
    this.user = user;
    this.products = products || [];
    this.models = models || [];
  }
}

// CResult model
export class CResult {
  constructor({ numero, id, fullName, discount, name, cellphone, address, email, gender, photo }) {
    this.numero = numero;
    this.id = id;
    this.fullName = fullName;
    this.discount = discount;
    this.name = name;
    this.cellphone = cellphone;
    this.address = address;
    this.email = email;
    this.gender = gender;
    this.photo = photo;
  }
}
