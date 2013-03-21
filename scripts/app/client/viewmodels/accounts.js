/**
 * Created with JetBrains WebStorm.
 * User: Chris
 * Date: 3/17/13
 * Time: 8:06 AM
 * To change this template use File | Settings | File Templates.
 */
define('views/accounts',['knockout','models/accounts'],function(ko,accounts){
    var accountsViewModel = {
        self:this,
        accountlist:null,
        onGetAccountsComplete:function (result) {
            self.accountlist = new accounts.AccountList(result.data);
            ko.applyBindingsToNode(document.getElementById('accountlist'), { template:{ name:'accountlist-template', data:self.accountlist} });
        },
        onPostAccountComplete:function(result){
          self.accountlist.addAccount(result.data);
        },
        newAccount:function(){
            var item = new accounts.Account();
            ko.applyBindingsToNode(document.getElementById('newaccount'), { template:{ name:'newaccount-template', data:item } });
        },
        cancelNewAccount:function(){
            console.log('canceled');
        }
    }
    return{
        accountsViewModel:accountsViewModel

    }
})