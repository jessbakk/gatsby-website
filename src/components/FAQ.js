import React, { Component } from 'react'
import { Accordion, Container, Icon, Segment } from 'semantic-ui-react'
import ScrollAnimation from 'react-animate-on-scroll'

class FAQ extends Component {
  state = { activeIndex: 0 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state

    return (
      <Segment className="segment" vertical>
        <Container>
          <ScrollAnimation animateIn='fadeIn' delay={300} offset={0}>
          <Accordion fluid styled>
            <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
              <Icon name='dropdown' />
              ARE YOU AN ACCREDITED INVESTOR?
            </Accordion.Title>
            <Accordion.Content className='animated fadeIn' style={{overflow: 'auto', maxHeight: '10em' }} active={activeIndex === 0}>
              <p>An <em>accredited investor</em>, in the context of a natural person, includes anyone who:</p>
              <ul>
                <li>earned income that exceeded $200,000 (or $300,000 together with a spouse) in each of the prior two years, and reasonably expects the same for the current year,&nbsp;<em>OR</em></li>
                <li>has a net worth over $1 million, either alone or together with a spouse (excluding the value of the person’s primary residence).</li>
              </ul>
              <p>On the income test, the person must satisfy the thresholds for the three years consistently either alone or with a spouse, and cannot, for example, satisfy one year based on individual income and the next two years based on joint income with a spouse. The only exception is if a person is married within this period, in which case the person may satisfy the threshold on the basis of joint income for the years during which the person was married and on the basis of individual income for the other years.</p>
              <p>In addition, entities such as banks, partnerships, corporations, nonprofits and trusts may be accredited investors. Of the entities that would be considered accredited investors and depending on your circumstances, the following may be relevant to you:</p>
              <ul>
                <li>any trust, with total assets in excess of $5 million, not formed to specifically purchase the subject securities, whose purchase is directed by a sophisticated person,&nbsp; or</li>
                <li>any entity in which all of the equity owners are accredited investors.</li>
              </ul>
              <p>In this context, a <em>sophisticated </em>person means the person must have, or the company or private fund offering the securities reasonably believes that this person has, sufficient knowledge and experience in financial and business matters to evaluate the merits and risks of the prospective investment.</p>
              <p>Source: Investor.gov</p>
              <p><a target='_blank' rel="noopener noreferrer" href="https://www.investor.gov/system/files/news/documents/english/ib_accreditedinvestors.pdf">https://www.investor.gov/system/files/news/documents/english/ib_accreditedinvestors.pdf</a></p>
            </Accordion.Content>
            

            <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick}>
              <Icon name='dropdown' />
              WHAT IS A K-1?
            </Accordion.Title>
            <Accordion.Content className='animated fadeIn' active={activeIndex === 1}>
            <p>Similar to a 1099, a K-1 form is an accounting of the tax income for the year. Each investor receives one per investment. K-1 forms are most commonly used in partnerships and in real estate ownership.</p>
            </Accordion.Content>

            <Accordion.Title active={activeIndex === 2} index={2} onClick={this.handleClick}>
              <Icon name='dropdown' />
              HOW OFTEN SHOULD DISTRIBUTIONS BE EXPECTED?
            </Accordion.Title>
            <Accordion.Content className='animated fadeIn' active={activeIndex === 2}>
              <p>An investor can expect to receive monthly distributions. Barshay Capital also distributes capital to investors at the end of the year depending on the performance of the properties and when properties are sold or refinanced.</p>
            </Accordion.Content>

            <Accordion.Title active={activeIndex === 3} index={3} onClick={this.handleClick}>
              <Icon name='dropdown' />
              HOW OFTEN WILL I BE UPDATED ON THE PROGRESS OF MY INVESTMENT?
            </Accordion.Title>
            <Accordion.Content className='animated fadeIn' active={activeIndex === 3}>
              <p>Investors can access updated account information 24/7 by logging into our investor portal. They’ll also receive asset management updates via email on each investment and a detailed investor report every quarter.</p>
            </Accordion.Content>

            <Accordion.Title active={activeIndex === 4} index={4} onClick={this.handleClick}>
              <Icon name='dropdown' />
              WHAT HAPPENS TO THE MONEY WHEN I FUND IN AN INVESTMENT?
            </Accordion.Title>
            <Accordion.Content className='animated fadeIn' active={activeIndex === 4}>
              <p>Funds can be wired directly into the subscription account of the fund, or sent by check.</p>
            </Accordion.Content>

            <Accordion.Title active={activeIndex === 5} index={5} onClick={this.handleClick}>
              <Icon name='dropdown' />
              WHAT IS THE MINIMUM INVESTMENT?
            </Accordion.Title>
            <Accordion.Content className='animated fadeIn' active={activeIndex === 5}>
              <p>$100,000 is the minimum to invest in a fund.</p>
            </Accordion.Content>

            <Accordion.Title active={activeIndex === 6} index={6} onClick={this.handleClick}>
              <Icon name='dropdown' />
              CAN I INVEST THROUGH MY LLC, LP, TRUST OR IRA?
            </Accordion.Title>
            <Accordion.Content className='animated fadeIn' active={activeIndex === 6}>
              <p>Yes. Investors are able to invest through an LLC or trust. Investors are also able to invest through their traditional self-directed IRAs.</p>
              <p>Please contact a Barshay Capital team member if you need help selecting a custodian.</p>
            </Accordion.Content>

            <Accordion.Title active={activeIndex === 7} index={7} onClick={this.handleClick}>
              <Icon name='dropdown' />
              WHAT ARE THE FEES?
              </Accordion.Title>
            <Accordion.Content className='animated fadeIn' active={activeIndex === 7}>
              <p>Investors receive a 6% preferred return. Once investor capital is fully returned and the preferred return is paid, Barshay Capital receives 35% of the profits and investors receive 65%. Additionally, Barshay Capital receives an annual 1% management fee on invested capital that is used to pay operating expenses of the company. A 1% acquisition fee and 1% disposition fee will also be charged for all assets. There is no fee to setup an account.</p>
            </Accordion.Content>

            <Accordion.Title active={activeIndex === 8} index={8} onClick={this.handleClick}>
              <Icon name='dropdown' />
              WILL I BE ASKED TO VERIFY MY STATUS AS AN ACCREDITED INVESTOR?
            </Accordion.Title>
            <Accordion.Content className='animated fadeIn' active={activeIndex === 8}>
              <p>Yes. Once you decide to invest in a property, you will be contacted by a Barshay Capital team member with instructions on how to verify your accreditation.</p>
            </Accordion.Content>

            <Accordion.Title active={activeIndex === 9} index={9} onClick={this.handleClick}>
              <Icon name='dropdown' />
              HOW CAN I INVEST?
            </Accordion.Title>
            <Accordion.Content className='animated fadeIn' style={{overflow: 'auto', maxHeight: '10em' }} active={activeIndex === 9}>
            <p>Offerings are available to accredited investors who register on Barshay Capitals secure online investment portal. Click on the “Sign Up” button to begin setting up your account. Once registered, you will have access to detailed information on available funds and performance projections. Scroll to the bottom of the page and download the three PDF fund documents.</p>
            <p>Contact a Barshay Capital team member for instructions on how to:</p>
            <ol>
              <li>Verify your accreditation</li>
              <li>Sign legal document (Subscription Agreement)</li>
              <li>Fund your investment</li>
            </ol>              
            </Accordion.Content>

            <Accordion.Title active={activeIndex === 10} index={10} onClick={this.handleClick}>
              <Icon name='dropdown' />
              AM I ABLE TO CASH OUT MY INVESTMENT AT ANY TIME?
            </Accordion.Title>
            <Accordion.Content className='animated fadeIn' active={activeIndex === 10}>
              <p>No. By their nature, real estate investments have a longer term time horizon than that of liquid stocks or bonds.</p>
            </Accordion.Content>
          </Accordion>
          </ScrollAnimation>
        </Container>
      </Segment>
    )
  }
}

export default FAQ
