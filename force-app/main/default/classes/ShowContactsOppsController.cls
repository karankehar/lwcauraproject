public with sharing class ShowContactsOppsController {
    @AuraEnabled
    public static ContactOppsWrapper getContactsandOpps(String accountId){
        List<Opportunity> opps = new List<Opportunity>();
        List<Contact> contacts = new List<Contact>();
        List<String> columnsList = new List<String>();
        ContactOppsWrapper cw = new ContactOppsWrapper();
        try {
            contacts =  [select id,name,phone,email from contact where accountid = '0015f00000B39qlAAB'];
            opps = [select id,name,amount,closedate from Opportunity where accountid = '0015f00000B39qlAAB'];
            cw.contactsList = contacts;
            cw.oppsList = opps;
            return cw;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    public class ContactOppsWrapper{
        @AuraEnabled
        public List<Contact> contactsList;
        @AuraEnabled
        public List<Opportunity> oppsList;
        //@AuraEnabled
        //List<String> columnNames;
    }
}