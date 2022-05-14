import { Actions } from "./actions";
import { Attachment } from "./attachment";
import { Name } from "./name";

export class ActionList{

    message: string;
    from: Name;
    description?: string;
    attachments?:Attachment[];
    actions?: Actions[];
}