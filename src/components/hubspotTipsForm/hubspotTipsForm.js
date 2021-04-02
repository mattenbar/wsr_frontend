import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import { useLocation } from 'react-router-dom';
import { useHubspotForm } from '@aaronhayes/react-use-hubspot-form';

window.$ = window.jQuery = require('jquery');

function HubspotTipsForm(props) {
  const FORM_APPLICABLE_CATEGORIES_LIST = [
    {
      path: 'letters-from-larry',
      formHeader: 'Have trends you’d like to point out for future Letters from Larry?  Submit your idea here',
      formSubject: 'Letters From Larry',
    },
    {
      path: 'capital-connections',
      formHeader: 'Do you have a successful story of your own to share when it comes to M&A deals, a new capital structure partnership or the sale of your business to a strategic or financial buyer?  Let us know here',
      formSubject: 'Capital Connections',
    },
    {
      path: 'point-counterpoint',
      formHeader: 'Have a hot button industry debate you’d like to propose? Let us know!',
      formSubject: 'Point - Counterpoint',
    },
    {
      path: 'the-digital-domain',
      formHeader: 'Do you have a fintech firm, expert or solution you’d like us to cover? Let us know here',
      formSubject: 'The Digital Domain',
    },
    {
      path: 'wallet-share',
      formHeader: 'Have ideas on sales, marketing and communications techniques to share with our community? Share your thoughts with us here',
      formSubject: 'Wallet Share',
    },
    {
      path: 'bizarre-industry-bazaar',
      formHeader: 'Have a weird industry story you’d like to share? Let us know here.',
      formSubject: 'Bizarre Industry Bazaar',
    },
    {
      path: 'investment-solutions-and-gatekeepers',
      formHeader: 'Let us know if you have news to share about third-party asset managers or financial product platforms here',
      formSubject: 'Investment Solutions & Gatekeepers',
    },
    {
      path: 'nightmare-on-compliance-st',
      formHeader: 'Have a compliance dilemma that doesn’t align with a black-and-white answer? Sander can help you navigate the gray areas of compliance – Submit your anonymous queries here',
      formSubject: 'Nightmare on Compliance Street',
    },
    {
      path: 'buy-it-or-build-it',
      formHeader: 'Have a “buy it or build it” dilemma or solution you’d like to share? Let us know here',
      formSubject: 'Buy It or Build It?',
    },
    {
      path: 'cybercrypt-tales',
      formHeader: 'Have a cybersecurity question that you’d like to share anonymously for Sid Yenemanra to answer? Submit your anonymous queries here',
      formSubject: 'CyberCrypt Tales',
    },
  ];

  const [formReference, setFormReference] = useState(null);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [showOnCurrentPage, setShowOnCurrentPage] = useState(false);
  const [formHeader, setFormHeader] = useState('');
  const [formSubject, setFormSubject] = useState('');
  const location = useLocation();

  const user = useSelector(state => {
    return (state.user.user);
  });

  const onFormReady = ($form) => {
    updateFormWithUser($form);
    setFormReference($form);
  };

  const { loaded, error, formCreated } = useHubspotForm({
    portalId: '8815329',
    formId: '30223fb5-f913-49e9-b298-87b18ba6f3c2',
    target: '#hubspot-tips-form',
    onFormReady: onFormReady
  });

  const updateFormWithUser = ($form) => {
    if (!$form) {
      return;
    }

    let userEmail = '';
    let userFirstName = '';
    let userLastName = '';

    if (localStorage.token) {
      userEmail = user.email;
      userFirstName = user.first_name;
      userLastName = user.last_name;
    }

    $form.find('input[name="subject"').val(formSubject).change();
    $form.find('input[name="email"]').val(userEmail).change();
    $form.find('input[name="firstname"]').val(userFirstName).change();
    $form.find('input[name="lastname"]').val(userLastName).change();
  };

  useEffect(() => {
    updateFormWithUser(formReference);
  });

  useEffect(() => {
    const isUserLoggedIn = !!localStorage.token;
    setIsUserLoggedIn(isUserLoggedIn);
  });

  useEffect(() => {
    const currentPagePath = location.pathname.toLowerCase();
    let showOnCurrentPage = false;
    let currentFormHeader = '';
    let currentFormSubject = '';

    for (const category of FORM_APPLICABLE_CATEGORIES_LIST) {
      if (currentPagePath.includes(category.path)) {
        showOnCurrentPage = true;
        currentFormHeader = category.formHeader;
        currentFormSubject = category.formSubject;
        break;
      }
    }

    setShowOnCurrentPage(showOnCurrentPage);
    setFormHeader(currentFormHeader);
    setFormSubject(currentFormSubject);
  });

  return (
    <>
      <h2 className={!isUserLoggedIn || !showOnCurrentPage || !loaded ? 'hidden': 'hubspot-form-header'}>{formHeader}</h2>
      <div id="hubspot-tips-form" className={!isUserLoggedIn || !showOnCurrentPage ? 'hidden': ''}></div>
    </>
  );
}

export default HubspotTipsForm;
