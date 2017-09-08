import React from 'react';
import './EventsList.css';
import Event from '../Event/Event';


const  EventsList = (props) => {
    return (
        
        <div className='EventsList'>
        <h3 className='event-title'>Dragon Dancing w/ A Pro! </h3>
        <b>Details:</b> Dragon Dancing has never been more fun when your life is on the line!<br/>
        <b>When:</b> Friday, Sept 23rd @8:30pm<br/>
        <b>Where:</b> Dragon Lounge, Whittier Ca.<br/>
        <img src={'https://i.imgur.com/AIeKGLV.jpg'} />
        <br /> 
      
        <h3 className='event-title'>Wine And Women: A Drinking Event </h3>
        <b>Details:</b> Can you name a better combo? come celebrate Humpday with the ladies while we 
        chat about our problems and get to know each other. Wine Wednesday is cheaper than therapy!<br/>
        <b>When:</b> Every Wednesday in September, @ 6:30pm<br/>
        <b>Where:</b> TotalWine, Whittier Ca.<br/>
        <img src={'https://i.imgur.com/yR7AgUA.jpg'} />
        <br /> 
       
        <h3 className='event-title'>Whittier Art Crawl </h3> 
        <b>Details:</b>What is Art? Who does Art? Well come find out while we celebrate the talented Artists of our town!
        enjoy some tapas and drinks while learning about the different artists that create in the area.<br/>
        <b>When:</b> Saturday, Sept 24rd @7:30pm<br/>
        <b>Where:</b> Uptown Whittier, in Front of the Greenleaf Statue.<br/>
        <img src={'https://i.imgur.com/HxGjJjd.jpg'} />
        <br /> 
        
        <h3 className='event-title'>Wedding Planning Event </h3>
        <b>Details:</b> Having a wedding? Want to learn more about how to make your wedding the best as well as most cost effective? 
        Whittier's Wedding League will be hosting a Wedding Seminar with all the ins and outs to what makes a great wedding. It will include 
        lots of fun activities and some prices too! <br/>
        <b>When:</b> Aaturday, Oct 2 @3:30pm<br/>
        <b>Where:</b> Whittier Community Center, Whittier Ca.<br/>
        <img src={'https://i.imgur.com/LknFWNx.jpg'} />
        <br /> 
  
        <h3 className='event-title'>Battle of the Burger: Los Angeles </h3>
        <b>Details:</b> The Best time of the year is here people, Come hang out while enjoying the flavors of the best
        burgers in town! <br/>
        <b>When:</b> Friday, Oct 12rd @2:00pm<br/>
        <b>Where:</b> The Knotted Apron, Whittier Ca.<br/>
        <img src={'https://i.imgur.com/lfOETuh.jpg'} />
        <br /> 
       
        <h3 className='event-title'>Metal Hat Making Classes </h3>
        <b>Details:</b> Just in time for Halloween, and so the aliens don't get ya! come learn how to make one of your
        very own trendy metal cone hats! seen in all the latest magazines, you will sure to be the most popular person 
        in town rocking one of these<br/>
        <b>When:</b> Friday, Oct 26th @5:30pm<br/>
        <b>Where:</b> Whittier Community Center, Whittier Ca.<br/>
        <img src={'https://i.imgur.com/nFbF5AT.jpg'} />
        <br /> 
        <h3 className='event-title'>Check Back For More Events Next Week!</h3>
        

        </div>





    )
}

export default EventsList;
