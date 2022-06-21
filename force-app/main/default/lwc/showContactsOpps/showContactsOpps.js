import { LightningElement , api} from 'lwc';
import getContactsandOpps from '@salesforce/apex/ShowContactsOppsController.getContactsandOpps';
export default class ShowContactsOpps extends LightningElement {
    AccountId = '0015f00000B39qlAAB';
    @api contactsOpps;
    @api contcolumnsList = [
        { label: 'Id', fieldName: 'Id' },
        { label: 'Name', fieldName: 'Name', type: 'text' },
        { label: 'Phone', fieldName: 'Phone', type: 'phone' },
        { label: 'Email', fieldName: 'Email', type: 'email' }
    ];
    @api oppcolumnsList = [
        { label: 'Id', fieldName: 'Id' },
        { label: 'Name', fieldName: 'Name', type: 'text' },
        { label: 'Amount', fieldName: 'Amount', type: 'phone' },
        { label: 'CloseDate', fieldName: 'CloseDate', type: 'date' }
    ];
    getContacts() {
        getContactsandOpps()
            .then(result => {
                this.contactsOpps = result;
                console.log('--Contacts--'+JSON.stringify(result));
            })
            .catch(error => {
                this.error = error;
            });
    }

}