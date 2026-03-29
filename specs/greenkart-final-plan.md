# GreenKart Basic Operations Test Plan

## Application Overview

GreenKart is an e-commerce platform for purchasing vegetables and fruits. Users can browse 11 products, search by name, adjust quantities, add items to cart, view cart details, and explore discount offers on a separate page.

## Test Scenarios

### 1. Product Browsing

**Seed:** `tests/seed.spec.ts`

#### 1.1. Homepage loads with products

**File:** `tests/smoke/homepage.spec.ts`

**Steps:**
  1. Navigate to homepage
    - expect: Page loads
    - expect: Products visible

### 2. Search

**Seed:** `tests/seed.spec.ts`

#### 2.1. Search works

**File:** `tests/search/basic.spec.ts`

**Steps:**
  1. Search for product
    - expect: Results filtered

### 3. Cart

**Seed:** `tests/seed.spec.ts`

#### 3.1. Add to cart

**File:** `tests/cart/add.spec.ts`

**Steps:**
  1. Click ADD TO CART
    - expect: Item added

### 4. Offers

**Seed:** `tests/seed.spec.ts`

#### 4.1. View offers

**File:** `tests/offers/view.spec.ts`

**Steps:**
  1. Click Top Deals link
    - expect: Offers page loads
