import React from 'react'
import marryOsakaImage from './images/marryOsaka.jpg'

function marryOsaka(props) {
  return (
      <div className="individual">
        <span>
        <img className="individualImage" src={marryOsakaImage} alt="Marry Osaka"/>
          <br/>
          Mary Osako is UCLA’s inaugural vice chancellor for strategic communications. A Los Angeles native and UCLA alumna, Mary has more than 20 years of experience leading complex communications efforts at some of the most innovative Fortune 500 companies in the world. She is well-versed in all facets of communications, reputation management and brand marketing, encompassing media relations, crisis communications, public affairs, executive communications, events and social and digital marketing.
          Previously, Mary served as chief communications officer of Activision Blizzard; head of global corporate communications at Amazon; and vice president of corporate, international and public policy communications at Yahoo!. Immediately prior to joining UCLA, she was a partner and chief operating officer at Haven Tower Group, a leading strategic communications and marketing firm based in Santa Monica that serves corporate clients across the country, where she currently serves as vice chair of the firm’s board of advisors.
          Mary serves on the board of directors of the Hammer Museum in Los Angeles. She earned her bachelor’s degree in psychology and a specialization in Asian American studies from UCLA in 1996.

        </span>
      </div>
  );
}

export default marryOsaka;