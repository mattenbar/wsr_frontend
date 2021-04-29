export function GetSlug(post){
    if(post.post){
        post = post.post
    }
    switch (post.category_id) {
        case 1:  
            return '/Capital-Connections'
        case 2:  
            return '/The-Digital-Domain'
        case 3:
            return '/Shout-Outs-And-Put-Downs'
        case 4:
            return 'Beltway-And-Beyond'
        case 5:  
            return '/People-Moves'
        case 6:  
            return '/Nightmare-On-Compliance-St'
        case 7:  
            return '/Buy-It-Or-Build-It'
        case 8:  
            return '/Wallet-Share'
        case 9:  
            return '/CyberCrypt-Tales'
        case 10:  
            return '/On-The-Rise'
        case 11:  
            return '/Letters-From-Larry'
        case 12:  
            return '/Dramatis-Personae'
        case 13:  
            return '/NewsMakers-Roundup'
        case 14:  
            return '/Transactions-And-Transitions'
        case 15:  
            return '/Cast-And-Crew'
        case 16:  
            return '/Bizarre-Industry-Bazaar'
        case 17:  
            return '/Investment-Solutions-and-Gatekeepers'
        case 18:
            return '/Words-In-Edgewise'
        case 19:
            return '/Noteworthy-Notes'
        case 20:
            return '/Health-And-Wealth'
        case 21:
            return '/Upmarket'

        default:
            return '/';
    }
}
