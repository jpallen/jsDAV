/*
 * @package jsDAV
 * @subpackage DAV
 * @copyright Copyright (C) 2010 Mike de Boer. All rights reserved.
 * @author Mike de Boer <mike AT ajax DOT org>
 * @license http://github.com/mikedeboer/jsDAV/blob/master/LICENSE MIT License
 */

var jsDAV       = require("./../jsdav"),
    jsDAV_iNode = require("./iNode").jsDAV_iNode,
    Exc         = require("./exceptions");

/**
 * Node class
 *
 * This is a helper class, that should aid in getting nodes setup.
 */
function jsDAV_Node() {}

exports.jsDAV_Node = jsDAV_Node;

(function() {
    this.REGBASE = this.REGBASE | jsDAV.__NODE__;

    /**
     * Returns the last modification time
     *
     * In this case, it will simply return the current time
     *
     * @return int
     */
    this.getLastModified = function(callback) {
        callback(null, new Date());
    };

    /**
     * Deleted the current node
     *
     * @throws Sabre_DAV_Exception_Forbidden
     * @return void
     */
    this["delete"] = function(callback) {
        callback(
            new Exc.jsDAV_Exception_Forbidden("Permission denied to delete node")
        );
    };

    /**
     * Renames the node
     *
     * @throws jsDAV_Exception_Forbidden
     * @param string name The new name
     * @return void
     */
    this.setName = function(name, callback) {
        callback(
            new Exc.jsDAV_Exception_Forbidden("Permission denied to rename file")
        );
    };
}).call(jsDAV_Node.prototype = new jsDAV_iNode());