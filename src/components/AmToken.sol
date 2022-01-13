// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;


import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract aMToken is ERC20 {

    constructor(uint256 aM_Token) ERC20("aM Token", "aM") {
        _mint(msg.sender, initialSupply);
    }

    function decimals() public pure override returns (uint8) {
        return 2;
    }
}