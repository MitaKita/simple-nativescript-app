import * as EmailValidator from 'email-validator'

export class SignUpItem {
  public firstName: string
  public lastName: string
  public company: string
  public postalCode: string
  public emailAddress: string

  constructor(firstName: string = "", lastName: string = "", company: string = "", postalCode: string = "", emailAddress: string = ""){
    this.firstName = firstName
    this.lastName = lastName
    this.company = company
    this.postalCode = postalCode
    this.emailAddress = emailAddress
  }

  public clear() {
    this.firstName = ""
    this.lastName = ""
    this.company = ""
    this.postalCode = ""
    this.emailAddress = ""
  }

  public isValid(): boolean {
    return  this.isValidFirstName() &&
            this.isValidLastName() &&
            this.isValidPostalCode() &&
            this.isValidEmail()
  }

  public isValidFirstName(): boolean {
    return !this.isEmpty(this.firstName)
  }

  public isValidLastName(): boolean {
    return !this.isEmpty(this.lastName)
  }

  public isValidPostalCode(): boolean {
    return !this.isEmpty(this.postalCode)
  }

  public isValidEmail(): boolean {
    return EmailValidator.validate(this.emailAddress)
  }

  private isEmpty(text: string): boolean {
    return text ? text.length === 0 : true
  }
}