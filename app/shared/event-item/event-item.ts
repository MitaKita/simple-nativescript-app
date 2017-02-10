export class EventItem {
  public eventTitle: string
  public eventNote: string
  public eventType: string
  public eventDate: Date
  private id: number

  constructor(title: string, note: string, type: string, date: Date){
    this.eventTitle = title
    this.eventNote = note
    this.eventType = type
    this.eventDate = date
  }

  public setId(id): void {
    this.id = id;
  }

}