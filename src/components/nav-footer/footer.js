import React from "react";
import T_logo from "./T_logo.png";

export default function Footer() {
  return (
    <div className="bg-[#faf1ed] mt-10 ">
    <div className="flex mx-28 pt-6">
    <div>
        <div className="flex gap-10">
          <ul>
            <li className="text-lg">About Tripadvisor</li>
            <li>
              <a className="text-sm hover:underline" href="#">
                About Us
              </a>
            </li>
            <li>
              <a className="text-sm hover:underline" href="#">
                Press
              </a>
            </li>
            <li>
              <a className="text-sm hover:underline" href="#">
                Resources and Policies
              </a>
            </li>
            <li>
              <a className="text-sm hover:underline" href="#">
                Careers
              </a>
            </li>
            <li>
              <a className="text-sm hover:underline" href="#">
                Investor Relations{" "}
              </a>
            </li>
            <li>
              <a className="text-sm hover:underline" href="#">
                Trust & Safety
              </a>
            </li>
            <li>
              <a className="text-sm hover:underline" href="#">
                Contact Us
              </a>
            </li>
            <li>
              <a className="text-sm hover:underline" href="#">
                Accessability Statement
              </a>
            </li>
          </ul>

          <ul>
            <li className="text-lg">Explore</li>
            <li>
              <a className="text-sm hover:underline" href="#">
                Write a review
              </a>
            </li>
            <li>
              <a className="text-sm hover:underline" href="#">
                Add a Place
              </a>
            </li>
            <li>
              <a className="text-sm hover:underline" href="#">
                Join
              </a>
            </li>
            <li>
              <a className="text-sm hover:underline" href="#">
                Travellers' Choice{" "}
              </a>
            </li>
            <li>
              <a className="text-sm hover:underline" href="#">
                Green Leaders{" "}
              </a>
            </li>
            <li>
              <a className="text-sm hover:underline" href="#">
                Blog
              </a>
            </li>
            <li>
              <a className="text-sm hover:underline" href="#">
                Help Center
              </a>
            </li>
            <li>
              <a className="text-sm hover:underline" href="#">
                Tripadvisor Plus
              </a>
            </li>
            <li>
              <a className="text-sm hover:underline" href="#">
                Travel Articles
              </a>
            </li>
          </ul>
          <div>
            <ul>
              <li className="text-lg">Do Business with us</li>
              <li>
                <a className="text-sm hover:underline" href="#">
                  Owners
                </a>
              </li>
              <li>
                <a className="text-sm hover:underline" href="#">
                  Business Advantages
                </a>
              </li>
              <li>
                <a className="text-sm hover:underline" href="#">
                  Sponsored Placements
                </a>
              </li>
              <li>
                <a className="text-sm hover:underline" href="#">
                  Advertise With Us
                </a>
              </li>
              <li>
                <a className="text-sm hover:underline" href="#">
                  Access Our Content API{" "}
                </a>
              </li>
              <li>
                <a className="text-sm hover:underline" href="#">
                  Become an Affiliate
                </a>
              </li>
            </ul>

            <ul>
              <li className="text-lg">Get the App</li>
              <li>
                <a className="text-sm hover:underline" href="#">
                  iPhone
                </a>
              </li>
              <li>
                <a className="text-sm hover:underline" href="#">
                  Android App
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div>
        <div className="flex flex-row">
          <img src={T_logo} alt="logo" className="h-12" />
          <div>
            <p className="text-sm">
              &copy;{new Date().getFullYear()} Tripadvisor LLC All rights
              reserved.
            </p>
            <div className="flex gap-3 flex-wrap">
              <a
                href="#"
                className="font-bold underline hover:text-neutral-600"
              >
                Terms of use
              </a>
              <a
                href="#"
                className="font-bold underline hover:text-neutral-600"
              >
                Privacy and Cookies Statement
              </a>
              <a
                href="#"
                className="font-bold underline hover:text-neutral-600"
              >
                Cookie consent
              </a>
              <a
                href="#"
                className="font-bold underline hover:text-neutral-600"
              >
                Site Map
              </a>
              <a
                href="#"
                className="font-bold underline hover:text-neutral-600"
              >
                How the site works
              </a>
              <a
                href="#"
                className="font-bold underline hover:text-neutral-600"
              >
                Contact us
              </a>
            </div>
          </div>
        </div>
            <div className="text-xs text-wrap">
              <p>
                This is the version of our website addressed to speakers of
                English in the United States. If you are a resident of another
                country or region, please select the appropriate version of
                Tripadvisor for your country or region in the drop-down menu.
              </p>
              <br />
              <p>
                Tripadvisor LLC makes no guarantees for availability of prices
                advertised on our sites and applications. Listed prices may
                require a stay of a particular length or have blackout dates,
                qualifications or other applicable restrictions. Tripadvisor LLC
                is not responsible for any content on external web sites that
                are not owned or operated by Tripadvisor . Indicative hotel
                prices displayed on our “Explore” pages are estimates
                extrapolated from historic pricing data.
              </p>
              <br />
              <p>
                Tripadvisor LLC is not a booking agent or tour operator. When
                you book with one of our partners, please be sure to check their
                site for a full disclosure of all applicable fees.
              </p>
            </div>
        </div>
      </div>
      <div>
        <h1 className="text-lg">Tripadvisor Sites</h1>
        <p className="text-sm text-wrap">Discover your dream destination with Jetsetter
Book the best restaurants with TheFork
Book tours and attraction tickets on Viator
Read cruise reviews on Cruise Critic
Get airline seating charts on Seat Guru
Find vacation rentals on FlipKey
Search for holiday rentals on Holiday Lettings
Plan and book your next trip with <a href="#" className="hover:underline hover:text-neutral-600">Reco Trip Designers</a>.</p>
      </div>
    </div>
    </div>
  );
}
