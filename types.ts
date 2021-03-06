interface IBaseField {
    base: string;
    caption: string;
    captions: {};
    required: boolean;
    order: number;
    formWidth: number;
    uuid: string;
    globalSearch: boolean;
    hasIndex: boolean;
    tooltips: {}
}

interface IFnField extends IBaseField {
    fn: string;
    height: number
}

interface IStringField extends IBaseField {
    height: number;
    stringAutocorrect: boolean;
    stringMultiline: boolean;
}

interface IHtmlField extends IBaseField {
    height: number
}

interface IFileField extends IBaseField {
    height: number;
    fileHandling: string;
    bgSize: string;
}

interface IBooleanField extends IBaseField {
    booleanRenderer: string
}

interface IChoiceField extends IBaseField {
    nextChoiceId: number;
    values: {};
    choiceRenderer: string
}

interface IMultiField extends IBaseField {
    nextChoiceId: number;
    values: {};
    multiRenderer: string
}

interface IUserField extends IBaseField {
    choiceRenderer: string
}

interface IDateField extends IBaseField {
    dateCalendar: boolean;
    dateYearly: boolean
}

interface IAppointmentField extends IBaseField {
    dateCalendar: boolean
}

interface ITimeField extends IBaseField {
    timeFormat: string
}

interface ITimeintervalField extends IBaseField {
    timeintervalFormat: string
}

interface ILinkField extends IBaseField {
    linkPreview: boolean
}
