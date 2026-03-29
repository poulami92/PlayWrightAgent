# GreenKart Basic Operations Test Plan

## Application Overview

GreenKart is an e-commerce application for purchasing vegetables and fruits online. The application has 16+ products, search functionality, quantity controls, shopping cart management, and an offers page with pagination and sorting.

## Test Scenarios

### 1. Home Page

**Seed:** `tests/seed.spec.ts`

#### 1.1. Homepage loads with products

**File:** `tests/test-home.spec.ts`

**Steps:**
  1. Navigate to homepage
    - expect: Page loads
    - expect: Products visible

### 2. Search

**Seed:** `tests/seed.spec.ts`

#### 2.1. Search filters products

**File:** `tests/test-search.spec.ts`

**Steps:**
  1. Search for a product
    - expect: Results filtered

### 3. Cart

**Seed:** `tests/seed.spec.ts`

#### 3.1. Add product to cart

**File:** `tests/test-cart.spec.ts`

**Steps:**
  1. Click ADD TO CART
    - expect: Product added

### 4. Offers

**Seed:** `tests/seed.spec.ts`

#### 4.1. View Top Deals page

**File:** `tests/test-offers.spec.ts`

**Steps:**
  1. Click Top Deals link
    - expect: Offers page loads
