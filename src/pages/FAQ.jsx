import { React, useEffect } from 'react'
import "../styles/FAQ.css"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const FAQ = () => {
  useEffect(() => {
    document.title = "FAQ"
  }, [])
  return (
    <>
      <Navbar />
      <div className='faqbody'>
        <div class="container">
          <h1>Frequently Asked Questions</h1>
          <div class="faq">
            <input class="trigger" id="faq" type="checkbox" /><label class="title" for="faq">What is Polaroid?</label>
            <div class="content">
              <div class="faq-drawer__content">
                <p>Polaroid is a site where you can track the films you've watched, keep a watchlist of films, write reviews, browse films, view the film information, book your movie tickets, and find specially curated films based on your taste.</p>
              </div>
            </div>
          </div>
          <div class="faq">
            <input class="trigger" id="faq-2" type="checkbox" /><label class="title" for="faq-2">Does it cost to use this service?</label>
            <div class="content">
              <div class="faq-drawer__content">
                <p>No. Polaroid will always remain free to use.</p>
              </div>
            </div>
          </div>
          <div class="faq">
            <input class="trigger" id="faq-3" type="checkbox" /><label class="title" for="faq-3">Can I watch films on Polaroid?</label>
            <div class="content">
              <div class="faq-drawer__content">
                <p>No, we are not a streaming service, but we do link to films on other services.</p>
              </div>
            </div>
          </div>
          <div class="faq">
            <input class="trigger" id="faq-4" type="checkbox" /><label class="title" for="faq-4">What are lists for?</label>
            <div class="content">
              <div class="faq-drawer__content">
                <p>With lists, you can collect and share groups of films (or keep private lists for yourself).</p>
              </div>
            </div>
          </div>
          <div class="faq">
            <input class="trigger" id="faq-5" type="checkbox" /><label class="title" for="faq-5">Where does Polaroid get its film data from?</label>
            <div class="content">
              <div class="faq-drawer__content">
                <p>Polaroid sources all film-related data from The Movie Database, a crowd-sourced database of film-related information.</p>
              </div>
            </div>
          </div>
          <div class="faq">
            <input class="trigger" id="faq-6" type="checkbox" /><label class="title" for="faq-6">Polaroid is missing an essential feature! Where should I suggest?</label>
            <div class="content">
              <div class="faq-drawer__content">
                <p>Please direct your feedback at polaroid@xox.com. We are continually improving our platform and would welcome your thoughts on the service’s future direction.</p>
              </div>
            </div>
          </div>
          <div class="faq">
            <input class="trigger" id="faq-7" type="checkbox" /><label class="title" for="faq-7">How should I reach out to Polaroid?</label>
            <div class="content">
              <div class="faq-drawer__content">
                <p>You can mail to us directly at polaroid@xox.com. We usually respond 1-2 business days.</p>
              </div>
            </div>
          </div>
          <div class="faq">
            <input class="trigger" id="faq-8" type="checkbox" /><label class="title" for="faq-8">Where can I find the OTT platforms of a certain film?</label>
            <div class="content">
              <div class="faq-drawer__content">
                <p>Under a film’s page, you can find a section where it will show which OTT platforms the film is available on.</p>
              </div>
            </div>
          </div>
          <div class="faq">
            <input class="trigger" id="faq-9" type="checkbox" /><label class="title" for="faq-9">Where can I find a film's similar films?</label>
            <div class="content">
              <div class="faq-drawer__content">
                <p>Under most films, there will be a section that will showcase similar films to the current film on the page.</p>
              </div>
            </div>
          </div>
          <div class="faq">
            <input class="trigger" id="faq-10" type="checkbox" /><label class="title" for="faq-10">What all can you do in a user profile?</label>
            <div class="content">
              <div class="faq-drawer__content">
                <p>Each user will have a profile where they can log films, maintain lists and reviews, and book tickets while also being able to change passwords and other essential features.</p>
              </div>
            </div>
          </div>
          <div class="faq">
            <input class="trigger" id="faq-11" type="checkbox" /><label class="title" for="faq-11">How can I interact with the community?</label>
            <div class="content">
              <div class="faq-drawer__content">
                <p>Users can write reviews for any film and start discussions and interact as a community.</p>
              </div>
            </div>
          </div>
          <div class="faq">
            <input class="trigger" id="faq-12" type="checkbox" /><label class="title" for="faq-12">Is it necessary to register for booking tickets?</label>
            <div class="content">
              <div class="faq-drawer__content">
                <p>Yes.</p>
              </div>
            </div>
          </div>
          <div class="faq">
            <input class="trigger" id="faq-13" type="checkbox" /><label class="title" for="faq-13">Can I choose my seat at the cinema?</label>
            <div class="content">
              <div class="faq-drawer__content">
                <p>Absolutely. You have the choice of selecting or changing your seats at every step of the transaction.</p>
              </div>
            </div>
          </div>
          <div class="faq">
            <input class="trigger" id="faq-14" type="checkbox" /><label class="title" for="faq-14">How can I confirm whether my tickets have been booked?</label>
            <div class="content">
              <div class="faq-drawer__content">
                <p>As soon as your booking is confirmed, a confirmation is sent.</p>
              </div>
            </div>
          </div>
          <div class="faq">
            <input class="trigger" id="faq-15" type="checkbox" /><label class="title" for="faq-15">Can we cancel or replace our tickets?</label>
            <div class="content">
              <div class="faq-drawer__content">
                <p>As per cinema policy, once a ticket has been paid for, it is deemed sold. It cannot be replaced or cancelled.</p>
              </div>
            </div>
          </div>
          <div class="faq">
            <input class="trigger" id="faq-16" type="checkbox" /><label class="title" for="faq-16">What about payments?</label>
            <div class="content">
              <div class="faq-drawer__content">
                <p>The RBI has made it mandatory, from 1st August 2009 onwards, for all online transactions to have an extra level of authentication to make online shopping safer. The 'extra' level is a password that you will have to enter after entering your credit/debit card details while making online payments. You will require this for transacting on any website in India, including Polaroid. This new technology is called VBV - Verified by Visa or MSC - MasterCard Secure Code.</p>
              </div>
            </div>
          </div>
          <div class="faq">
            <input class="trigger" id="faq-17" type="checkbox" /><label class="title" for="faq-17">I want to book tickets in bulk.</label>
            <div class="content">
              <div class="faq-drawer__content">
                <p>Please email us the details on your requirement at polaroid@xox.com.</p>
              </div>
            </div>
          </div>
          <div class="faq">
            <input class="trigger" id="faq-18" type="checkbox" /><label class="title" for="faq-18">I have booked a ticket through Polaroid, but the event has been canceled. How do I get a refund?</label>
            <div class="content">
              <div class="faq-drawer__content">
                <p>If there is a cancellation, the funds will be returned to you within 2 weeks.</p>
              </div>
            </div>
          </div>
          <div class="faq">
            <input class="trigger" id="faq-19" type="checkbox" /><label class="title" for="faq-19">What should I do if my booking is not finished?</label>
            <div class="content">
              <div class="faq-drawer__content">
                <p>If your order process fails during the payment process, the amount will be refunded to you within 1 week.</p>
              </div>
            </div>
          </div>
          <div class="faq">
            <input class="trigger" id="faq-20" type="checkbox" /><label class="title" for="faq-20">I have booked a ticket through Polaroid, but the event has been canceled. How do I get a refund?</label>
            <div class="content">
              <div class="faq-drawer__content">
                <p>If there is a cancellation, the funds will be returned to you within 2 weeks.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default FAQ